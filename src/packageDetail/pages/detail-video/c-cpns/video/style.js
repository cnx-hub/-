import { View } from "@tarojs/components";

import { styled } from "linaria/react";

export const VideoWrapper = styled(View)`
  padding-top: 225PX;

  .video {
    position: fixed;
    width: 100%;
    height: 225PX;
    top: 0;
    z-index: 999;
  }
`;
