import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Video } from "@tarojs/components";

import { getURL } from "../../store/actionCreators";

import { VideoWrapper } from "./style";

const VideoItem = ({ id }) => {
  // redux hooks
  const dispatch = useDispatch();
  const { mvURLInfo, danmuList } = useSelector(state => {
    return {
      mvURLInfo: state.detailVideo.mvURLInfo,
      danmuList: state.detailVideo.danmuList,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getURL(id));
  }, []);
  return (
    <VideoWrapper>
      <Video
        className="video"
        src={mvURLInfo.url}
        danmuList={danmuList}
        autoplay
      ></Video>
    </VideoWrapper>
  );
};

export default VideoItem;
