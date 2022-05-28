import React, { useState } from "react";

import { getSearchSuggest, getSearchResult } from "@/server/api_search";
import { debounce } from "@/utils/debounce";
import { stringToNodes } from "@/utils/string2node";

import { DetailSongWrapper } from "./style";
import HotSearch from "./c-cpns/hot-search";
import SuggestSearch from "./c-cpns/suggest-search";
import ResultSearch from "./c-cpns/result-search";

const debounceGetSearchSuggest = debounce(getSearchSuggest, 300);

const DeatilSearch = () => {
  const [searchValue, setsearchValue] = useState("");
  const [suggestSongs, setSuggestSongs] = useState([]);
  const [suggestSongNodes, setSuggestSongNodes] = useState([]);
  const [resultSongs, setResultSongs] = useState([]);

  // 建议搜索
  const handleSearchChange = e => {
    setsearchValue(e.detail);

    if (!e.detail.length) {
      debounceGetSearchSuggest.cancle();
      setSuggestSongs([]);
      return;
    }

    debounceGetSearchSuggest(e.detail).then(res => {
      // 1.获取建议的关键字曲
      const song = res.result.allMatch;

      setSuggestSongs(song);

      if (!song.length) return;
      // 2.转成nodes节点
      const suggestKeywords = song.map(item => item.keyword);
      const songNodes = [];
      for (let keyword of suggestKeywords) {
        songNodes.push(stringToNodes(keyword, e.detail));
      }
      setSuggestSongNodes(songNodes);
    });
  };
  // 确定搜索
  const handleSearchAction = value => {
    let realValue = value || searchValue;
    if (!realValue.length) {
      setResultSongs([]);
      return;
    }

    getSearchResult(realValue).then(res => {
      setResultSongs(res.result.songs);
    });
  };

  // 点击确定搜索
  const handleItemClick = value => {
    setsearchValue(value);

    handleSearchAction(value);
  };

  return (
    <DetailSongWrapper className="wrapper">
      <van-search
        className="search"
        placeholder="请输入搜索关键词"
        shape="round"
        background="#f7f7f7"
        value={searchValue}
        show-action={searchValue}
        onChange={handleSearchChange}
        onSearch={handleSearchAction}
      />
      {/* 热门搜索 */}
      {!searchValue.length && !suggestSongs.length ? (
        <HotSearch handle={value => handleItemClick(value)} />
      ) : !resultSongs.length ? (
        <SuggestSearch
          searchValue={searchValue}
          suggestSongs={suggestSongs}
          suggestSongsNodes={suggestSongNodes}
          handle={value => handleItemClick(value)}
        />
      ) : (
        <ResultSearch resultSongs={resultSongs} />
      )}
    </DetailSongWrapper>
  );
};

export default DeatilSearch;
