import { View, Block } from "@tarojs/components";
import SongItemV2 from "@/components/song-item-v2";

import { ResultSearchWrapper } from "./style";

const ResultSearch = ({ resultSongs }) => {
  return (
    <ResultSearchWrapper>
      <View className="title">最佳匹配</View>
      <View className="list">
        {resultSongs.map((item, index) => {
          return (
            <Block key={item.id}>
              <SongItemV2 index={index + 1} item={item} />
            </Block>
          );
        })}
      </View>
    </ResultSearchWrapper>
  );
};

export default ResultSearch;
