import React from "react";
import { View, Image } from "@tarojs/components";

import { DeatilVideoWrapper } from "./styled";
import {formatCount} from "@/utils/format"

const DetailVideoItem = ({ item }) => {
  return (
    <DeatilVideoWrapper className="item">
      <View className="left">
        <Image className="image" src={item.coverUrl} mode="widthFix"></Image>
        <View className="count">{formatCount(item.playTime)}</View>
      </View>
      <View className="right">
        <View className="title" style={{"-webkit-box-orient":"vertical"}}>{item.title}</View>
        <View className="nickname">{item.creator[0].userName}</View>
      </View>
    </DeatilVideoWrapper>
  );
};

export default DetailVideoItem;
