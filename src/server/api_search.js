import request from "./index";

export function getSearchHotKeys() {
  return request.get("/search/hot");
}

export function getSearchSuggest(keywords, type = "mobile") {
  return request.get("/search/suggest", {
    keywords,
    type
  });
}

export function getSearchResult(keywords) {
  return request.get("/search", {
    keywords
  });
}
