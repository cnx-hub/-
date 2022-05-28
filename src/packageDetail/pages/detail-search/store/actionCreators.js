import { getSearchHotKeys } from "@/server/api_search";
import { CHANGE_KEYWORDS } from "./constant";

const changeSearchHotKeysAction = data => ({
  type: CHANGE_KEYWORDS,
  keywords: data
});

export function getSearchHotKeysData() {
  return async dispatch => {
    const res = await getSearchHotKeys();
    dispatch(changeSearchHotKeysAction(res.result.hots));
  };
}
