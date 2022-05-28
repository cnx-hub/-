import { View } from "@tarojs/components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Taro from "@tarojs/taro";

import {
  changePlayListSongsAction,
  changeplayListIndexAction
} from "@/packageMusic/pages/music-player/store/actionCreators";

import { RcommendSongWrapper } from "./style";
import AreaHeader from "@/components/area-header";
import SongItemV1 from "@/components/song-item-v1";

const RecommonSong = () => {
  // redux hooks
  const { recommendSongs } = useSelector(
    state => ({
      recommendSongs: state.homeMusic.recommendSongs
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // 事件处理
  const handleMoreClick = () => {
    Taro.navigateTo({
      url:
        "/packageDetail/pages/detail-songs/index?rankName=recommendSongs&type=rank"
    });
  };

  const handleSongItemClick = (songList, currentIndex) => {
    dispatch(changePlayListSongsAction(songList));
    dispatch(changeplayListIndexAction(currentIndex));
  };
  return (
    <RcommendSongWrapper className="recommon-song">
      <AreaHeader
        title="推荐歌曲"
        onClick={() => handleMoreClick()}
      ></AreaHeader>
      {recommendSongs &&
        recommendSongs.tracks &&
        recommendSongs.tracks.slice(0, 6).map((item, index) => {
          return (
            <View
              key={item.id}
              onClick={() => handleSongItemClick(recommendSongs.tracks, index)}
            >
              <SongItemV1 item={item}></SongItemV1>
            </View>
          );
        })}
    </RcommendSongWrapper>
  );
};

export default RecommonSong;
