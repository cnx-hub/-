import { View } from "@tarojs/components";

import { styled } from "linaria/react";

export const SongMenuAreaWrapper = styled(View)`
  .menu-list {
    width: 100vw;
    white-space: nowrap;
    position: relative;
    left: -20rpx;

    .menu-item {
      display: inline-block;
      vertical-align: top;
      width: 220rpx;

      margin-left: 20rpx;
    }
    .menu-item:last-of-type {
      margin-right: 20rpx;
    }
  }
`;
