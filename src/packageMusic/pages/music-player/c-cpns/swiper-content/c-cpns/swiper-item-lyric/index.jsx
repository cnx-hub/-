import { Block, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";

import { SwiperItemWrapper } from "./style";

const SwiperITEMLyric = () => {
  const { lyricInfos, currentIndex } = useSelector(
    state => ({
      lyricInfos: state.musicPlayer.lyricInfos,
      currentIndex: state.musicPlayer.currentIndex
    }),
    shallowEqual
  );

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
    <SwiperItemWrapper>
      <ScrollView
        class="lyric-list"
        scrollY
        scroll-with-animation
        scrollTop={currentIndex * 35}
      >
        {lyricInfos.length &&
          lyricInfos.map((item, index) => {
            return (
              <Block key={index}>
                <view
                  className={classNames("item", {
                    active: index === currentIndex
                  })}
                  style={{
                    paddingTop: index == 0 ? contentHeight / 2 - 80 : 0,
                    paddingBottom:
                      index === lyricInfos.length - 1
                        ? contentHeight / 2 + 80
                        : 0
                  }}
                >
                  {item.text}
                </view>
              </Block>
            );
          })}
      </ScrollView>
    </SwiperItemWrapper>
  );
};

export default SwiperITEMLyric;
