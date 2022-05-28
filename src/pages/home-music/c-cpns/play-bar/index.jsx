import { View, Image } from "@tarojs/components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Taro from "@tarojs/taro";

import { changeMusicPlayStatusAction } from "@/packageMusic/pages/music-player/store/actionCreators";

import { PlayBarWrapper } from "./style";

const PlayBar = () => {
  const { currentSong, isPlaying } = useSelector(
    state => ({
      currentSong: state.musicPlayer.currentSong,
      isPlaying: state.musicPlayer.isPlaying
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const handlePlayBarClick = () => {
    Taro.navigateTo({
      url: "/packageMusic/pages/music-player/index"
    });
  };

  const handlePlayBtnClick = e => {
    e.stopPropagation();
    dispatch(changeMusicPlayStatusAction());
  };

  return (
    <PlayBarWrapper onClick={() => handlePlayBarClick()}>
      <View className="left">
        <Image
          className="album album-anima"
          mode="aspectFill"
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          src={currentSong.al && currentSong.al.picUrl}
        />
        <View className="name">{currentSong.name}</View>
      </View>
      <View className="right">
        <Image
          className="icon play"
          src={require(`@/assets/images/music/${
            isPlaying ? "pause" : "play"
          }_icon.png`)}
          onClick={e => handlePlayBtnClick(e)}
        />
        <Image
          class="icon playlist"
          mode="aspectFill"
          src={require("@/assets/images/music/playlist_icon.png")}
        />
      </View>
    </PlayBarWrapper>
  );
};

export default PlayBar;
