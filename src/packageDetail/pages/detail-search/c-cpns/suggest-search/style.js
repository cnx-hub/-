import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const SuggestSearchWrapper = styled(View)`
  padding: 10px;

  .title {
    color: #26ce8a;
    font-size: 34px;
    font-weight: 700;
  }

  .item {
    display: flex;
    align-items: center;
    margin-top: 16px;

    .icon {
      width: 66px;
      margin-left: -20px;
    }

    .text {
      font-size: 28px;
    }
  }
`;
