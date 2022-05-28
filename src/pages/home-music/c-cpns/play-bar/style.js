import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const PlayBarWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44Px;
  box-shadow: 0 -1Px 5Px rgba(0, 0, 0, 0.1);

  background: #fafafa;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .left {
    .album {
      position: relative;
      top: -8px;

      width: 44Px;
      height: 44Px;

      border-radius: 50%;
    }

    .name {
      font-size: 28px;
      margin-left: 10px;
    }
  }

  .right {
    .icon {
      width: 25Px;
      height: 25Px;
      margin-right: 10px;
    }
  }

  @keyframes albumRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .album-anima {
    animation: albumRotate 10s linear infinite;
  }
`;
