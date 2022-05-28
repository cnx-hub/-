import { styled } from "linaria/react";
import { View } from "@tarojs/components";
export const Page = styled(View)`
  .swiper {
    border-radius: 10rpx;
    overflow: hidden;
    transform: translateY(0);
  }

  .swiper-item {
    display: flex;
  }

  .swiper-item .swiper-image {
    width: 100%;
    heigth:100%;
  }
`;
