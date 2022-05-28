import { SwiperItem } from "@tarojs/components";
import { styled } from "linaria/react";

export const SwiperItemWrapper = styled(SwiperItem)`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 60px;

  .album {
    flex: 5;
    display: flex;
    align-items: center;
    .image {
      width: 100%;
      border-radius: 12px;
    }
  }

  .info {
    margin: 20px 0;
    .title {
      font-size: 48px;
      font-weight: 700;
    }
    .subtitle {
      .singer,
      .alias {
        color: #ccc;
        margin: 16px 0;
        font-size: 26px;
      }
    }
  }

  .lyric {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #26ce8a;
  }

  .progress {
    margin: 10px 0;
    .slider {
      margin: 0 0 18px 20px;
    }
    .time {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ccc;
      font-size: 22px;
      .current {
        margin-left: 10px;
      }
    }
  }

  .operation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 30px;
    .btn {
      display: inline-block;
      width: 60px;
      height: 60px;
      padding: 0;
    }
    .btn-mode {
      width: 80px;
      height: 80px;
    }
    .btn-pause {
      width: 130px;
      height: 130px;
    }
  }
`;
