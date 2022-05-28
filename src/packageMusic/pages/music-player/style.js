import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const MusicPlayerWrapper = styled(View)`
  color: #fff;
  height: 100vh;
  width: 100vw;
  .tab {
    font-size: 28px;
    color: #999;

    .active {
      color: #fff;
    }

    .divider {
      margin: 0 10px;
    }
  }
`;
