import Taro from "@tarojs/taro";

import {
  CHANGE_ID,
  CHANGE_CURRENTSONG,
  CHANGE_DURATIONTIME,
  CHANGE_LYRICINFOS,
  CHANGE_ISPLAYING,
  CHANGE_CURRENTTIME,
  CHANGE_CURRENTINDEX,
  CHANGE_CURRENTLYRICTEXT,
  CHANGE_PLAYLISTINDEX,
  CHANGE_PLAYLISTSONGS,
  CHANGE_PLAYMODEINDEX,
  CHANGE_ISSTOP
} from "./constant";

const defaultState = {
  id: 0,
  currentSong: {},
  durationTime: 0,
  lyricInfos: [],

  currentTime: 0,
  currentIndex: 0,
  currentLyricText: "",

  isPlaying: false,
  playModeIndex: 0, // 0顺序播放  1单曲播放  2随机播放
  isStop: false, //判断是否人为关闭音乐

  playListSongs: [],
  playListIndex: 0
};
// 全局背景音乐播放器
export const audioContext = Taro.getBackgroundAudioManager();

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ID:
      return { ...state, id: action.id };
    case CHANGE_CURRENTSONG:
      return { ...state, currentSong: action.currentSong };
    case CHANGE_DURATIONTIME:
      return { ...state, durationTime: action.durationTime };
    case CHANGE_LYRICINFOS:
      return { ...state, lyricInfos: action.lyricInfos };
    case CHANGE_ISPLAYING:
      return { ...state, isPlaying: action.isPlaying };
    case CHANGE_PLAYMODEINDEX:
      return { ...state, playModeIndex: action.playModeIndex };
    case CHANGE_CURRENTTIME:
      return { ...state, currentTime: action.currentTime };
    case CHANGE_CURRENTINDEX:
      return { ...state, currentIndex: action.currentIndex };
    case CHANGE_CURRENTLYRICTEXT:
      return { ...state, currentLyricText: action.currentLyricText };
    case CHANGE_PLAYLISTINDEX:
      return { ...state, playListIndex: action.playListIndex };
    case CHANGE_PLAYLISTSONGS:
      return { ...state, playListSongs: action.playListSongs };
    case CHANGE_ISSTOP:
      return { ...state, isStop: action.isStop };
    default:
      return state;
  }
}
