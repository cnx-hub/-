import { SwiperItem } from "@tarojs/components";
import { styled } from "linaria/react";

export const SwiperItemWrapper = styled(SwiperItem)`
  .lyric-list {
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .item {
      height: 35Px;
      line-height: 35Px;
      font-size: 28px;
      text-align: center;
      color: #989898;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item.active {
      color: #26ce8a;
      font-size: 36px;
    }
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
`;
