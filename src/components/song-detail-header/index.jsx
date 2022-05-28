import { View, Image, Text } from "@tarojs/components";

import { formatCount } from "@/utils/format";

import { SongDetailHeaderWrapper } from "./style";

const SongDetailHeader = ({ songInfo }) => {
  return (
    <SongDetailHeaderWrapper>
      {/* 背景 */}
      <Image
        mode="aspectFill"
        className="bg-image"
        src={songInfo.coverImgUrl}
      />
      <View className="bg-cover"></View>

      {/* 内容 */}
      <View className="content">
        <Image mode="aspectFill" className="image" src={songInfo.coverImgUrl} />
        <View className="info">
          <View className="title">{songInfo.name}</View>
          <View className="author">
            <Image
              mode="aspectFill"
              className="avatar"
              src={songInfo.creator.avatarUrl}
            />
            <Text className="nickname">{songInfo.creator.nickname}</Text>
          </View>
          <View className="desc">简介：{songInfo.description}</View>
        </View>
      </View>

      <View className="operation">
        <View className="item">
          <Image
            className="icon"
            mode="widthFix"
            src={require("@/assets/images/icons/favor_icon.png")}
          />
          <Text className="text">{formatCount(songInfo.playCount)}</Text>
        </View>
        <View className="item">
          <Image
            className="icon"
            mode="widthFix"
            src={require("@/assets/images/icons/share_icon.png")}
          />
          <Text className="text">分享</Text>
        </View>
      </View>
    </SongDetailHeaderWrapper>
  );
};

export default SongDetailHeader;
