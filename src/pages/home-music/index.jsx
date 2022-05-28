import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getRankingData, getSongMenuData } from "./store/actionCreators";

import { PageWrapper } from "./style";
import SwiperWrapper from "./c-cpns/swiper";
import RecommonSong from "./c-cpns/recommon-song";
import Ranking from "./c-cpns/ranking";
import SongMenuArea from "@/components/song-menu-area";
import PlayBar from "./c-cpns/play-bar";

const Index = () => {
  // 搜索页面的跳转
  const handleSearchClick = () => {
    Taro.navigateTo({
      url: "/packageDetail/pages/detail-search/index"
    });
  };
  // redux hooks
  const dispatch = useDispatch();
  const { hotSongMenu, recommendSongMenu, id } = useSelector(
    state => ({
      recommendSongMenu: state.homeMusic.recommendSongMenu,
      hotSongMenu: state.homeMusic.hotSongMenu,
      id: state.musicPlayer.id
    }),
    shallowEqual
  );
  // react hooks
  useEffect(() => {
    dispatch(getRankingData());
    dispatch(getSongMenuData());
  }, []);

  return (
    <PageWrapper className="wrapper" style={{ paddingBottom: id && 44 }}>
      <van-search
        placeholder="搜索您喜欢的歌曲"
        disabled
        shape="round"
        background="#fafafa"
        onClickInput={() => handleSearchClick()}
      />
      <SwiperWrapper />
      {/*  3.推荐歌曲 */}
      <RecommonSong />
      {/*  4.推荐/热门歌单  */}
      <SongMenuArea title={"热门歌单"} songMenu={hotSongMenu} />
      <SongMenuArea title={"推荐"} songMenu={recommendSongMenu} />
      {/*  5.巅峰榜*/}
      <Ranking />
      {/* 5.播放的工具 */}
      {id ? <PlayBar /> : ""}
    </PageWrapper>
  );
};

export default Index;
