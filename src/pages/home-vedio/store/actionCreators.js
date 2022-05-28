import Taro from "@tarojs/taro";
import { getTopMV } from "@/server/api_video";

import { CHANGE_HASMORE, CHANGE_HOMEVEDIO } from "./constant";

const changeHasMoreAction = data => ({
  type: CHANGE_HASMORE,
  hasMore: data
});

const changeTopMvAction = data => ({
  type: CHANGE_HOMEVEDIO,
  topMVs: data
});

export const getTopMvList = offset => {
  return async (dispatch, getState) => {
    const res = await getTopMV(offset);
    let newData = [];
    const { topMVs } = getState().homeVideo;
    dispatch(changeHasMoreAction(res.hasMore));
    if (offset == 0) {
      newData = res.data;
    } else {
      newData = [...topMVs, ...res.data];
    }
    dispatch(changeTopMvAction(newData));
    Taro.hideNavigationBarLoading();
    if (offset == 0) {
      Taro.stopPullDownRefresh();
    }
  };
};
