import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const AreaHeaderWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;

  .title {
    font-size: 36px;
    font-weight: 700;
  }

  .right {
    .default {
      display: flex;
      align-items: center;
      font-size: 30rpx;
      color: #777;
      .icon {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
