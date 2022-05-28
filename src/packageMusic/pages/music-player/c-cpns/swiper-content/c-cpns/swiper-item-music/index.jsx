import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Slider } from "@tarojs/components";

import { audioContext } from "../../../../store/reducer";
import { formatDuration } from "@/utils/format";
import {
  changeIsplayingAction,
  changeMusicPlayStatusAction,
  changeplayModeIndexAction,
  changeMusicAction
} from "../../../../store/actionCreators";

import { SwiperItemWrapper } from "./style";

const SwiperItemMusic = () => {
  const [deviceRadio, setdeviceRadio] = useState(2);
  // 获取设备信息
  useEffect(() => {
    const { deviceRadio } = Taro.getApp().$app.globalData;
    setdeviceRadio(deviceRadio);
  }, []);
  // redux hooks
  const {
    currentSong,
    durationTime,
    currentTime,
    currentLyricText,
    isPlaying,
    playModeIndex
  } = useSelector(
    state => ({
      currentSong: state.musicPlayer.currentSong,
      durationTime: state.musicPlayer.durationTime,
      currentTime: state.musicPlayer.currentTime,
      currentLyricText: state.musicPlayer.currentLyricText,
      isPlaying: state.musicPlayer.isPlaying,
      playModeIndex: state.musicPlayer.playModeIndex
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // slide状态
  const [sliderValue, setsliderValue] = useState(0);
  const [isChanging, setisChanging] = useState(false);
  const [time, settime] = useState(0);
  useEffect(() => {
    if (!isChanging) {
      const value = (currentTime / durationTime) * 100;
      setsliderValue(value);
      settime(currentTime);
    }
  }, [currentTime]);
  const handleSliderChange = event => {
    const value = event.detail.value;
    const currentTime = (durationTime * value) / 100;

    audioContext.seek(currentTime / 1000);
    setsliderValue(value);
    setisChanging(false);
    dispatch(changeIsplayingAction(true));
  };
  const handleSliderChanging = event => {
    const value = event.detail.value;

    const currentTime = (durationTime * value) / 100;
    setsliderValue(value);
    setisChanging(true);
    settime(currentTime);
  };

  // operation 处理
  const [playModeName, setplayModeName] = useState("order");
  const handleModeBtnClick = () => {
    let index = playModeIndex + 1;
    if (index == 3) index = 0;
    dispatch(changeplayModeIndexAction(index));
  };
  useEffect(() => {
    if (playModeIndex == 0) setplayModeName("order");
    else if (playModeIndex == 1) setplayModeName("repeat");
    else if (playModeIndex == 2) setplayModeName("random");
  }, [playModeIndex]);

  const handlePlayBtnClick = () => {
    dispatch(changeMusicPlayStatusAction());
  };

  const handlePrevClick = () => {
    dispatch(changeMusicAction(false));
  };

  const handleNextClick = () => {
    dispatch(changeMusicAction(true));
  };
  return (
    <SwiperItemWrapper>
      <View className="album">
        <Image
          mode="widthFix"
          src={currentSong.al && currentSong.al.picUrl}
          className="image"
        />
      </View>
      <View className="info">
        <View className="title">{currentSong.name}</View>
        <View className="subtitle">
          <View className="singer">
            {currentSong.ar && currentSong.ar[0].name}
          </View>
          <View className="alias">
            {currentSong.alia && currentSong.alia[0]}
          </View>
        </View>
      </View>
      {deviceRadio >= 2 && <View className="lyric">{currentLyricText}</View>}
      <View className="progress">
        <Slider
          block-size={12}
          className="slider"
          value={sliderValue}
          onChange={e => handleSliderChange(e)}
          onChanging={e => handleSliderChanging(e)}
        ></Slider>
        <View className="time">
          <View className="current">{formatDuration(time)}</View>
          <View className="duration">{formatDuration(durationTime)}</View>
        </View>
      </View>
      <View className="operation">
        <Image
          mode="widthFix"
          className="btn btn-mode"
          src={require(`@/packageMusic/assets/images/player/play_${playModeName}.png`)}
          onClick={() => handleModeBtnClick()}
        ></Image>
        <Image
          mode="widthFix"
          className="btn btn-prev"
          src={require("@/packageMusic/assets/images/player/play_prev.png")}
          onClick={() => handlePrevClick()}
        ></Image>
        <Image
          mode="widthFix"
          className="btn btn-pause"
          src={require(`@/packageMusic/assets/images/player/play_${
            isPlaying ? "pause" : "resume"
          }.png`)}
          onClick={() => handlePlayBtnClick()}
        ></Image>
        <Image
          mode="widthFix"
          className="btn btn-next"
          src={require("@/packageMusic/assets/images/player/play_next.png")}
          onClick={() => handleNextClick()}
        ></Image>
        <Image
          mode="widthFix"
          className="btn btn-music"
          src={require("@/packageMusic/assets/images/player/play_music.png")}
        ></Image>
      </View>
    </SwiperItemWrapper>
  );
};

export default SwiperItemMusic;
