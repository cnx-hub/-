import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux";

import { getSongData } from "@/packageMusic/pages/music-player/store/actionCreators";

import { SongItemV1Wrapper } from "./style";

const SongItemV1 = ({ item }) => {
  const dispatch = useDispatch();
  const handleItemClick = id => {
    // 1.跳转到detail-song页面
    Taro.navigateTo({
      url: `/packageMusic/pages/music-player/index?id=${id}`
    });

    // 2.发送网络请求 获取歌曲数据
    dispatch(getSongData(id));
    // dispatch(setupAudioContextListenerAction());
  };

  return (
    <SongItemV1Wrapper onClick={() => handleItemClick(item.id)}>
      <Image className="image" src={item.al.picUrl}></Image>
      <View className="content">
        <View className="title">{item.name}</View>
        <View className="source">
          {item.ar[0].name} · {item.al.name}
        </View>
      </View>
      <View className="arrow">
        <Image
          mode="widthFix"
          src={require("@/assets/images/icons/arrow-right.png")}
          className="icon"
        ></Image>
      </View>
    </SongItemV1Wrapper>
  );
};

export default SongItemV1;
