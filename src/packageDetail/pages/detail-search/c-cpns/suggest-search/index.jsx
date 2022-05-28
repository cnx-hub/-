import { View, Image, RichText } from "@tarojs/components";

import { SuggestSearchWrapper } from "./style";

const SuggestSearch = ({
  searchValue,
  suggestSongs,
  suggestSongsNodes,
  handle
}) => {
  return (
    <SuggestSearchWrapper className="suggest">
      <View className="title">搜索"{searchValue}"</View>
      {suggestSongs.map((item, index) => {
        return (
          <View className="item" key={item.keyword} onClick={() => handle(item.keyword)}>
            <Image
              className="icon"
              mode="widthFix"
              src={require("@/assets/images/icons/search_icon.png")}
            />
            <RichText nodes={suggestSongsNodes[index]}></RichText>
          </View>
        );
      })}
    </SuggestSearchWrapper>
  );
};

export default SuggestSearch;
