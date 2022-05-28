import { Swiper } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

import { SwiperContentWrapper } from "./style";
import SwiperItemMusic from "./c-cpns/swiper-item-music";
import SwiperITEMLyric from "./c-cpns/swiper-item-lyric";

const SwiperContent = ({ handle }) => {
  const [contentHeight, setcontentHeight] = useState(0);
  // 获取设备信息
  useEffect(() => {
    const {
      screenHeight,
      statusBarHeight,
      navBarHeight
    } = Taro.getApp().$app.globalData;
    const height = screenHeight - statusBarHeight - navBarHeight;
    setcontentHeight(height);
  }, []);

  return (
    <SwiperContentWrapper>
      <Swiper style={{ height: contentHeight }} onChange={handle}>
        <SwiperItemMusic />
        <SwiperITEMLyric />
      </Swiper>
    </SwiperContentWrapper>
  );
};

export default SwiperContent;
