import { View } from "@tarojs/components";

import { styled } from "linaria/react";

export const RankingAreaItemWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  background-color: eeeeee;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #eee;

  .content {
    padding: 24px;
    flex: 1;
    overflow: hidden;
    .content-title {
      font-size: 34px;
    }
    .content-list {
      font-size: 24px;
      width: 100%;
      margin-top: 6px;
      .content-list-item {
        color: #333;
        margin-top: 6px;
        width: 100%;

        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-emphasis: none;
        .singer {
          color: #999;
        }
      }
    }
  }

  .album {
    position: relative;
    width: 220px;
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
      display: block;
    }
    .play-counter {
      position: absolute;
      right: 0;
      bottom: 6px;
      color: #fff;
      font-size: 22px;
      border-radius: 12px;
      padding: 6rpx 10px;
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
