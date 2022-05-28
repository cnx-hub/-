import { getMVDetail, getMVURL, getRelativeVideo } from "@/server/api_video";

import {
  CHANGE_RELATEDVIDEOS,
  CHANGE_MVURLINFO,
  CHANGE_MVDETAIL
} from "./constant";

const changeRealativeVideoAction = data => ({
  type: CHANGE_RELATEDVIDEOS,
  relatedVideos: data
});

const changeMVURLinfoAction = data => ({
  type: CHANGE_MVURLINFO,
  mvURLInfo: data
});

const changeMVDetailAction = data => ({
  type: CHANGE_MVDETAIL,
  mvDetail: data
});

export const getURL = id => {
  return async dispatch => {
    const res = await getMVURL(id);
    dispatch(changeMVURLinfoAction(res.data));
  };
};

export const getDetail = id => {
  return async dispatch => {
    const res = await getMVDetail(id);
    dispatch(changeMVDetailAction(res.data));
  };
};

export const getRelative = id => {
  return async dispatch => {
    const res = await getRelativeVideo(id);
    dispatch(changeRealativeVideoAction(res.data));
  };
};
