import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const NavBarWrapper = styled(View)`
  .nav-bar {
    display: flex;
    text-align: center;

    .left,
    .right {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left .icon {
      width: 44px;
    }

    .center {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
