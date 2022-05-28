import { getBanners, getRankings, getSongMenu } from "@/server/api_music";
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDSONGS,
  CHANGE_NEWRANKINGS,
  CHANGE_ORIGINRANKING,
  CHANGE_UPDATERANKING,
  CHANGE_HOTSONGMENU,
  CHANGE_RECOMMENDSONGMENU
} from "./constant";

export const rankingMap = {
  "0": "Newrankings",
  "1": "RecommendSong",
  "2": "Originrankings",
  "3": "Updaterankings"
};

const changeBannersAction = data => ({
  type: CHANGE_BANNERS,
  banners: data
});

const changeRecommendSongActions = data => ({
  type: CHANGE_RECOMMENDSONGS,
  recommendSongs: data
});

const changeNewrankingsActions = data => ({
  type: CHANGE_NEWRANKINGS,
  newRanking: data
});

const changeOriginrankingsActions = data => ({
  type: CHANGE_ORIGINRANKING,
  originRanking: data
});

const changeUpdaterankingsActions = data => ({
  type: CHANGE_UPDATERANKING,
  updateRanking: data
});

const changehotsongMenuAction = data => ({
  type: CHANGE_HOTSONGMENU,
  hotSongMenu: data
});

const changerecommendSongMenuAction = data => ({
  type: CHANGE_RECOMMENDSONGMENU,
  recommendSongMenu: data
});

const changeRankingAction = {
  changeRecommendSongActions,
  changeNewrankingsActions,
  changeOriginrankingsActions,
  changeUpdaterankingsActions
};

export function getBanner() {
  return async dispatch => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
  };
}

const idMap = [3779629, 3778678, 2884035, 19723756];

export function getRankingData() {
  return dispatch => {
    for (let i = 0; i <= 3; i++) {
      getRankings(idMap[i]).then(res => {
        const dispathName = `change${rankingMap[i]}Actions`;
        dispatch(changeRankingAction[dispathName](res.playlist));
      });
    }
  };
}

export function getSongMenuData() {
  return dispatch => {
    getSongMenu().then(res => {
      dispatch(changehotsongMenuAction(res.playlists));
    });

    getSongMenu("华语").then(res => {
      dispatch(changerecommendSongMenuAction(res.playlists));
    });
  };
}
