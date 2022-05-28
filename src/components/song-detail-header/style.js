import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const SongDetailHeaderWrapper = styled(View)`
  width: 100vw;
  position: relative;
  left: -20px;
  display: flex;
  flex-direction: column;
  height: 450px;
  color: #fff;

  .bg-image,
  .bg-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg-cover {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }

  .content {
    display: flex;
    margin-top: 60px;
    padding: 0 50px;

    .image {
      width: 220px;
      height: 220px;
      border-radius: 16px;
    }

    .info {
      flex: 1;
      position: relative;
      height: 220px;
      margin-left: 50px;
      .author {
        margin-top: 20px;
        display: flex;
        align-items: center;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }
        .nickname {
          font-size: 24px;
          margin-left: 18px;
        }
      }

      .desc {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin-top: 30px;
        font-size: 24px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .operation {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    margin-top: 30px;
    .item {
      display: flex;
      align-items: center;
      .icon {
        width: 48px;
        margin-right: 10px;
      }
      .text {
        font-size: 28px;
      }
    }
  }
`;
