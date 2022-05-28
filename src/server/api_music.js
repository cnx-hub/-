import request from "./index";

export function getBanners() {
  return request.get("/banner", {
    type: 2
  });
}
// 0 飙升  1 热门 2 新歌 3 原创
export function getRankings(id) {
  return request.get("/playlist/detail", {
    id
  });
}

export function getSongMenu(cat = "全部", offset = 0, limit = 6) {
  return request.get("/top/playlist", {
    cat,
    offset,
    limit
  });
}

export function getSongMenuDetail(id) {
  return request.get("/playlist/detail", {
    id
  });
}
