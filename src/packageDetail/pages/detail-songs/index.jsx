import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { View, Block } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";

import { getSongMenuDetail } from "@/server/api_music";

import { DetailSongWrapper } from "./style";
import AreaHeader from "@/components/area-header";
import SongDetailHeader from "@/components/song-detail-header";
import SongItemV2 from "@/components/song-item-v2";

const DetailSong = () => {
  // 有的数据是存储在redux 有的是等点击了之后才发送网络请求获得的
  const [songInfo, setSongInfo] = useState({});

  // taro hooks
  const { rankName, id, type } = useRouter().params;
  // redux hooks
  let { ranking } = useSelector(
    state => ({
      ranking: state.homeMusic[rankName]
    }),
    shallowEqual
  );
  // react hooks
  useEffect(async () => {
    if (id) {
      const res = await getSongMenuDetail(id);
      setSongInfo(res.playlist);
    } else {
      setSongInfo(ranking);
    }
  }, [id]);

  return (
    <DetailSongWrapper className="wrapper">
      {type == "rank" && !!Object.keys(songInfo).length && (
        <AreaHeader title={songInfo.name} showRight={true} />
      )}
      {type == "menu" && !!Object.keys(songInfo).length && (
        <SongDetailHeader songInfo={songInfo} />
      )}
      {songInfo.tracks &&
        songInfo.tracks.map((item, index) => {
          return (
            <Block key={item.id}>
              <SongItemV2
                item={item}
                index={index}
                songList={songInfo.tracks}
              ></SongItemV2>
            </Block>
          );
        })}
    </DetailSongWrapper>
  );
};

export default DetailSong;
