import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View } from "@tarojs/components";
import Taro, { useReachBottom, usePullDownRefresh } from "@tarojs/taro";
import { VideoWrapper } from "./style";

import { getTopMvList } from "./store/actionCreators";

import VedioItemV1 from "@/components/video-item-v1";

const HomeVedio = () => {
  // redux hooks
  const dispatch = useDispatch();
  const { topMVs, hasMore } = useSelector(state => {
    return {
      topMVs: state.homeVideo.topMVs,
      hasMore: state.homeVideo.hasMore
    };
  }, shallowEqual);

  // react -hooks
  useEffect(() => {
    dispatch(getTopMvList(0));
  }, []);

  // @tarojs/taro
  useReachBottom(() => {
    if (hasMore) {
      dispatch(getTopMvList(topMVs.length));
    }
  });
  usePullDownRefresh(() => {
    Taro.showNavigationBarLoading();
    dispatch(getTopMvList(0));
  });
  return (
    <VideoWrapper>
      {topMVs.map(item => {
        return (
          <View className="item">
            <VedioItemV1 item={item} key={item.id} />
          </View>
        );
      })}
    </VideoWrapper>
  );
};

export default HomeVedio;
