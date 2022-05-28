import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const HotSearchWrapper = styled(View)`
  padding: 10px;

  .list {
    display: flex;
    flex-wrap: wrap;
    .tag {
      font-size: 26px;
      background-color: #fff;
      padding: 10px 12px;
      border-radius: 16px;
      margin-right: 20px;
      margin-top: 20px;
    }
    .tag:first-of-type {
      color: #26ce8a;
    }
  }
`;
