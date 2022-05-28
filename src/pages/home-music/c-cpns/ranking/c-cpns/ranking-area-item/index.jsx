import { View, Block, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { formatCount } from "@/utils/format";

import { RankingAreaItemWrapper } from "./style";

const RankingAreaItem = ({ item, rankName }) => {
  const arr = [1, 2, 3];
  const handleItemClick = () => {
    Taro.navigateTo({
      url: `/packageDetail/pages/detail-songs/index?type=rank&rankName=${rankName}`
    });
  };
  return (
    <RankingAreaItemWrapper onClick={() => handleItemClick()}>
      {Object.keys(item).length ? (
        <Block>
          <View className="content">
            <View className="content-title">{item.name}</View>
            <View className="content-list">
              {arr.map((_, index) => {
                return (
                  <Block key={index}>
                    <View className="content-list-item">
                      <Text>
                        {index + 1}. {item.tracks[index].name}
                      </Text>
                      <Text className="singer">
                        {" "}
                        - {item.tracks[index].ar[0].name}
                      </Text>
                    </View>
                  </Block>
                );
              })}
            </View>
          </View>
          <View className="album">
            <Image
              className="image"
              mode="aspectFill"
              src={item.coverImgUrl}
            ></Image>
            <View className="play-counter">{formatCount(item.playCount)}</View>
          </View>
        </Block>
      ) : (
        ""
      )}
    </RankingAreaItemWrapper>
  );
};

export default RankingAreaItem;
