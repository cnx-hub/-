import request from "./index";

// 获取歌曲详情信息  但是音频地址不能获取到
export function getSongDetail(ids) {
  return request.get("/song/detail", {
    ids
  });
}
// 获取歌词
export function getSongLyric(id) {
  return request.get("/lyric", {
    id
  });
}
