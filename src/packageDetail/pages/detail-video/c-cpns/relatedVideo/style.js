import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const RelatedVideoWrapper = styled(View)`
  .content {
    padding: 10px 20px;
    .title {
      font-size: 36px;
      color: #000;
    }
    .info {
      margin-top: 20px;
      color: #bbb;
      font-size: 30px;
      .time {
        margin-left: 10px;
      }
    }
    .related {
      margin-top: 20px;
      .head {
        font-size: 36px;
      }
    }
  }
`;
