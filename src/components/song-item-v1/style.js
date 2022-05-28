import { View } from "@tarojs/components";

import { styled } from "linaria/react";

export const SongItemV1Wrapper = styled(View)`
  display: flex;
  padding: 16px 0;
  align-items: center;

  .image {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }

  .content {
    margin-left: 16px;
    flex: 1;
    .name {
      font-size: 32px;
      color: #555;
    }
    .source {
      margin-top: 16px;
      font-size: 24px;
      color: #999;
    }
  }

  .arrow {
    .icon {
      width: 50rpx;
      height: 50rpx;
    }
  }
`;
