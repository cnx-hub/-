import React from "react";
import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import { VedioWrapper, VedioAlbum, VedioContent } from "./style";

import { formatCount, formatDuration } from "@/utils/format";

const VedioItemV1 = props => {
  const item = props.item;
  // 跳转到对应的页面
  const handleItemClick = () => {
    Taro.navigateTo({
      url: `/packageDetail/pages/detail-video/index?id=${item.id}`
    });
  };

  return (
    <VedioWrapper onClick={() => handleItemClick()}>
      <VedioAlbum>
        <Image className="image" mode="widthFix" src={item.cover}></Image>
        <View className="info">
          <View className="count">{formatCount(item.playCount)}</View>
          <View className="duration">
            {formatDuration(item.mv.videos[0].duration)}
          </View>
        </View>
      </VedioAlbum>
      <VedioContent style={{ "-webkit-box-orient": "vertical" }}>
        {item.name} - {item.artistName}
      </VedioContent>
    </VedioWrapper>
  );
};

export default VedioItemV1;
