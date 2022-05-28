import { getSongDetail, getSongLyric } from "@/server/api_player";
import parseLyric from "@/utils/parse-lyric";
import {
  CHANGE_ID,
  CHANGE_CURRENTSONG,
  CHANGE_DURATIONTIME,
  CHANGE_LYRICINFOS,
  CHANGE_ISPLAYING,
  CHANGE_CURRENTTIME,
  CHANGE_CURRENTINDEX,
  CHANGE_CURRENTLYRICTEXT,
  CHANGE_PLAYMODEINDEX,
  CHANGE_PLAYLISTINDEX,
  CHANGE_PLAYLISTSONGS,
  CHANGE_ISSTOP
} from "./constant";
import { audioContext } from "./reducer";

const changeCurrentSongAction = data => ({
  type: CHANGE_CURRENTSONG,
  currentSong: data
});

const changeDurationTimeAction = data => ({
  type: CHANGE_DURATIONTIME,
  durationTime: data
});

const changeLyricinfosAction = data => ({
  type: CHANGE_LYRICINFOS,
  lyricInfos: data
});

const changeIdAction = data => ({
  type: CHANGE_ID,
  id: data
});

export const changeIsplayingAction = data => ({
  type: CHANGE_ISPLAYING,
  isPlaying: data
});

const changeCurrentTimeAction = data => ({
  type: CHANGE_CURRENTTIME,
  currentTime: data
});

const changeCurrentIndexAction = data => ({
  type: CHANGE_CURRENTINDEX,
  currentIndex: data
});

const changeCurrentLyricTextAction = data => ({
  type: CHANGE_CURRENTLYRICTEXT,
  currentLyricText: data
});

export const changePlayListSongsAction = data => ({
  type: CHANGE_PLAYLISTSONGS,
  playListSongs: data
});

export const changeplayListIndexAction = data => ({
  type: CHANGE_PLAYLISTINDEX,
  playListIndex: data
});

export const changeIsStopAction = data => ({
  type: CHANGE_ISSTOP,
  isStop: data
});

export function getSongData(ids, isFresh = false) {
  return (dispatch, getStore) => {
    const musicPlayer = getStore().musicPlayer;
    // console.log(musicPlayer);
    if (musicPlayer.id == ids && !isFresh) {
      return;
    }
    dispatch(changeIdAction(ids));
    // 0.改变歌曲的状态
    dispatch(changeIsplayingAction(true));
    // 1.获取歌曲的相关信息
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]));
      dispatch(changeDurationTimeAction(res.songs[0].dt));
      audioContext.title = res.songs[0].name;
    });
    // 2.获取歌词
    getSongLyric(ids).then(res => {
      const lyricString = res.lrc.lyric;
      const lyricInfos = parseLyric(lyricString);
      dispatch(changeLyricinfosAction(lyricInfos));
    });

    // 3.音乐播放
    audioContext.stop();
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${ids}.mp3`;
    audioContext.title = musicPlayer.id;
    audioContext.autoplay = true;

    dispatch(setupAudioContextListenerAction());
  };
}
// 监听歌曲的一系列操作
export function setupAudioContextListenerAction() {
  return (dispatch, getStore) => {
    // 1.监听自动播放
    audioContext.onCanplay(() => {
      audioContext.play();
    });
    // 2.随着时间的变化 改变歌曲的进程
    audioContext.onTimeUpdate(() => {
      const musicPlayer = getStore().musicPlayer;
      // 2.1audioContext.currentTime返回的单位是 s
      const currentTime = audioContext.currentTime * 1000;
      // 2.2根据当前的时间修改slider
      dispatch(changeCurrentTimeAction(currentTime));
      // 2.3找到当前时间对应的歌词
      let i = 0;
      for (; i < musicPlayer.lyricInfos.length; i++) {
        const lyricInfo = musicPlayer.lyricInfos[i];
        if (currentTime < lyricInfo.time) {
          break;
        }
      }

      // 2.4设置当前歌词的索引和内容
      const currentIndex = i - 1;
      if (musicPlayer.currentIndex !== currentIndex) {
        const currentLyricInfo = musicPlayer.lyricInfos[currentIndex];
        if (!currentLyricInfo) return;
        dispatch(changeCurrentIndexAction(currentIndex));
        dispatch(changeCurrentLyricTextAction(currentLyricInfo.text));
      }
    });

    // 3.监听歌曲的暂停、播放、关闭
    audioContext.onPlay(() => {
      dispatch(changeIsplayingAction(true));
    });

    audioContext.onPause(() => {
      dispatch(changeIsplayingAction(false));
    });

    // 人为关闭
    audioContext.onStop(() => {
      dispatch(changeIsplayingAction(false));
      dispatch(changeIsStopAction(true));
    });
  };
}

// 歌曲对应的暂停事件
export function changeMusicPlayStatusAction() {
  return (dispatch, getStore) => {
    const { isPlaying, isStop, id } = getStore().musicPlayer;

    dispatch(changeIsplayingAction(!isPlaying));

    if (isStop && isPlaying) {
      // 当我们 人为关闭歌曲时 对应属性都会被清除掉 所以需要重新添加
      audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
      audioContext.title = id;
      dispatch(changeIsStopAction(false));
    }

    // 有个bug 就是play还有将音频内容下载下来 就是pause
    getStore().musicPlayer.isPlaying
      ? audioContext.play()
      : audioContext.pause();
  };
}

export function changeplayModeIndexAction(data) {
  return {
    type: CHANGE_PLAYMODEINDEX,
    playModeIndex: data
  };
}

export function changeMusicAction(isNext) {
  return (dispatch, getStore) => {
    let musicPlayer = getStore().musicPlayer;
    // 1.index获取当前的索引
    let index = musicPlayer.playListIndex;
    // 0顺序播放  1单曲播放  2随机播放
    // 2.下一次歌曲的顺序
    switch (musicPlayer.playModeIndex) {
      case 0:
        index = isNext ? index + 1 : index - 1;
        if (index == musicPlayer.playListSongs.length) index = 0;
        if (index == -1) index = musicPlayer.playListSongs.length - 1;
        break;
      case 1:
        break;
      case 2:
        index = Math.floor(Math.random() * musicPlayer.playListSongs.length);
        break;
    }
    // 3.修改当前播放的歌曲
    let currentSong = musicPlayer.playListSongs[index];

    dispatch(changeplayListIndexAction(index));
    dispatch(getSongData(currentSong.id, true));
  };
}
