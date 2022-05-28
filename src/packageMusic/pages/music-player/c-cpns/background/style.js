import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const BackGroundWrapper = styled(View)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  .bg-image,
  .bg-cover {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg-cover {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
  }
`;
