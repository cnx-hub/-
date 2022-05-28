import { Swiper, SwiperItem, Image } from "@tarojs/components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect, useState } from "react";

import { getBanner } from "../../store/actionCreators";
import { Page } from "./style";

import { queryRect } from "@/utils/query-rect";
import { throttle } from "@/utils/throttle";
const throttleQueryRect = throttle(queryRect, 200, { trailing: true });

const SwiperWrapper = () => {
  // redux hooks
  const dispatch = useDispatch();
  const { banners } = useSelector(
    state => ({
      banners: state.homeMusic.banners
    }),
    shallowEqual
  );
  // react hooks
  useEffect(() => {
    dispatch(getBanner());
  }, []);
  const [swiperHeight, setSwiperHeigth] = useState(0);

  //事件处理
  const handleSwiperImageLoaded = () => {
    throttleQueryRect(".swiper-image").then(res => {
      setSwiperHeigth(res[0].height);
      console.log("res[0].height", res[0].height);
    });
  };
  return (
    <Page>
      <Swiper
        className="swiper"
        indicator-dots
        circular
        autoplay
        style={{ height: swiperHeight }}
      >
        {banners.map(item => {
          return (
            <SwiperItem className="swiper-item" key={item.bannerId}>
              <Image
                src={item.pic}
                mode="widthFix"
                className="swiper-image"
                onLoad={() => handleSwiperImageLoaded()}
              />
            </SwiperItem>
          );
        })}
      </Swiper>
    </Page>
  );
};

export default SwiperWrapper;
