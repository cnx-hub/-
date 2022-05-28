import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { View, Text } from "@tarojs/components";

import { getDetail, getRelative } from "../../store/actionCreators";
import { formatCount } from "@/utils/format";
import { RelatedVideoWrapper } from "./style";

import DetailVideoItem from "@/components/detail-video-item";

const RelatedVideoItem = ({ id }) => {
  // redux hooks
  const dispatch = useDispatch();
  const { mvDetail, relatedVideos } = useSelector(state => {

    return {
      mvDetail: state.detailVideo.mvDetail,
      relatedVideos: state.detailVideo.relatedVideos
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getRelative(id));
  }, []);
  return (
    <RelatedVideoWrapper>
      <View className="content">
        <View className="title">{mvDetail.name}</View>
        <View className="info">
          <Text className="count">{formatCount(mvDetail.playCount)}次播放</Text>
          <Text className="time">{mvDetail.publishTime}</Text>
        </View>
        <View className="related">
          <View className="head">相关视频</View>
          {relatedVideos.map(item => {
            return (
              <View key={item.vid}>
                <DetailVideoItem item={item} />
              </View>
            );
          })}
        </View>
      </View>
    </RelatedVideoWrapper>
  );
};

export default RelatedVideoItem;
