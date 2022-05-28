import React from "react";
import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";

import VideoItem from "./c-cpns/video";
import RelatedVideoItem from "./c-cpns/relatedVideo";

const DetailVideo = () => {
  // 获取路由参数
  const router = useRouter();
  const id = router.params.id;

  return (
    <View className="wrapper">
      <VideoItem id={id} />
      <RelatedVideoItem id={id} />
    </View>
  );
};

export default DetailVideo;
