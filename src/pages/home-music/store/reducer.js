import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDSONGS,
  CHANGE_NEWRANKINGS,
  CHANGE_ORIGINRANKING,
  CHANGE_UPDATERANKING,
  CHANGE_HOTSONGMENU,
  CHANGE_RECOMMENDSONGMENU
} from "./constant";
const defaultState = {
  banners: [],
  recommendSongs: [],
  newRanking: {},
  originRanking: {}, // 2: 原创
  updateRanking: {}, // 3: 飙升
  hotSongMenu: [],
  recommendSongMenu: []
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMENDSONGS:
      return { ...state, recommendSongs: action.recommendSongs };
    case CHANGE_NEWRANKINGS:
      return { ...state, newRanking: action.newRanking };
    case CHANGE_ORIGINRANKING:
      return { ...state, originRanking: action.originRanking };
    case CHANGE_UPDATERANKING:
      return { ...state, updateRanking: action.updateRanking };
    case CHANGE_HOTSONGMENU:
      return { ...state, hotSongMenu: action.hotSongMenu };
    case CHANGE_RECOMMENDSONGMENU:
      return { ...state, recommendSongMenu: action.recommendSongMenu };
    default:
      return state;
  }
}
