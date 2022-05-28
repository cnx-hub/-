import { View, Image } from "@tarojs/components";
import { useSelector, shallowEqual } from "react-redux";

import { BackGroundWrapper } from "./style";

const BackGround = () => {
  const { currentSong } = useSelector(
    state => ({
      currentSong: state.musicPlayer.currentSong
    }),
    shallowEqual
  );
  return (
    <BackGroundWrapper>
      <Image
        mode="aspectFill"
        className="bg-image"
        src={currentSong.al && currentSong.al.picUrl}
      ></Image>
      <View className="bg-cover"></View>
    </BackGroundWrapper>
  );
};
export default BackGround;
