import { combineReducers } from "redux";

import { reducer as homeVideoReducer } from "@/pages/home-vedio/store";
import { reducer as HomeMusicReducer } from "@/pages/home-music/store";

import { reducer as detailViedoReducer } from "@/packageDetail/pages/detail-video/store";

import { reducer as detailSearchReducer } from "@/packageDetail/pages/detail-search/store";

import { reducer as MusicPlayerReducer } from "@/packageMusic/pages/music-player/store";

export default combineReducers({
  homeVideo: homeVideoReducer,
  detailVideo: detailViedoReducer,
  homeMusic: HomeMusicReducer,
  detailSearch: detailSearchReducer,
  musicPlayer: MusicPlayerReducer
});
