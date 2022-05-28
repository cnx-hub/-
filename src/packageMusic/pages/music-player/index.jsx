import { useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import classNames from "classnames";

import { MusicPlayerWrapper } from "./style";
import BackGround from "./c-cpns/background";
import NavBar from "@/baseui/navbar";
import SwiperContent from "./c-cpns/swiper-content";

const MusicPlayer = () => {
  const [currentPage, setcurrentPage] = useState(0);

  // 事件处理
  const handleBack = () => {
    Taro.navigateBack();
  };

  const handleSwiperChange = event => {
    let current = event.detail.current;
    setcurrentPage(current);
  };

  return (
    <MusicPlayerWrapper>
      <BackGround />
      <NavBar handle={() => handleBack()}>
        <View slot="center" className="tab">
          <Text className={classNames({ active: currentPage == 0 })}>歌曲</Text>
          <Text className="divider">|</Text>
          <Text className={classNames({ active: currentPage == 1 })}>歌词</Text>
        </View>
      </NavBar>
      <SwiperContent handle={e => handleSwiperChange(e)} />
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
