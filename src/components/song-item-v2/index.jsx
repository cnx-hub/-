import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux";

import {
  getSongData,
  changePlayListSongsAction,
  changeplayListIndexAction
} from "@/packageMusic/pages/music-player/store/actionCreators";

import { SongeItemV2Wrapper } from "./style";

const SongItemV2 = ({ item, index, songList }) => {
  const AliasName = () => {
    return (
      <Text>
        <Text class="dots">·</Text>
        <Text>{(item.alia && item.alia[0]) || item.alias[0]}</Text>
      </Text>
    );
  };
  const singerName = (item.ar && item.ar[0].name) || item.artists[0].name;

  const dispatch = useDispatch();
  const handleItemClick = id => {
    // 1.跳转到detail-song页面
    Taro.navigateTo({
      url: `/packageMusic/pages/music-player/index?id=${id}`
    });

    // 2.发送网络请求 获取歌曲数据
    dispatch(getSongData(id));
    dispatch(changePlayListSongsAction(songList));
    dispatch(changeplayListIndexAction(index));
  };

  return (
    <SongeItemV2Wrapper onClick={() => handleItemClick(item.id)}>
      <View className="index">{index + 1}</View>
      <View className="info">
        <View className="name">{item.name}</View>
        <View className="source">
          <Image
            className="icon"
            src={require("@/assets/images/icons/sq_icon.png")}
          ></Image>
          <Text>{singerName}</Text>
          {(item.alia && item.alia[0]) || (item.alias && item.alias[0])
            ? AliasName()
            : ""}
        </View>
      </View>
    </SongeItemV2Wrapper>
  );
};

export default SongItemV2;
