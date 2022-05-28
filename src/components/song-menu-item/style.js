import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const SongMenuItemWrapper = styled(View)`
  display: inline-block;
  width: 100%;
  .top {
    position: relative;
    .image {
      width: 100%;
      border-radius: 12px;
      background-size: cover;
    }
    .count {
      position: absolute;
      right: 0;
      bottom: 10px;
      color: #ffffff;
      font-size: 28px;
      border-radius: 12px;
      padding: 6px 10px;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .bottom {
    width: 100%;
    font-size: 26rpx;

    /* 显示两行 */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -moz-box;
    -moz-line-clamp: 2;
    -moz-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
  }
`;
