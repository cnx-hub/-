import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const SongeItemV2Wrapper = styled(View)`
  display: flex;
  align-items: center;
  margin: 36px 0 10px;

  .index {
    font-size: 30px;
    padding: 12px;
  }

  .info {
    flex: 1;
    margin-left: 16px;
    .name {
      font-size: 30px;
    }
    .source {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #666;
      margin-top: 10px;
      .icon {
        width: 38px;
        height: 22px;
        margin-right: 10px;
      }
      .dots {
        margin: 0 6px;
      }
    }
  }
`;
