import { View, Image } from "@tarojs/components";
import { formatCount } from "@/utils/format";

import { SongMenuItemWrapper } from "./style";

const SoneMenuItem = ({ item }) => {
  return (
    <SongMenuItemWrapper>
      <View className="top">
        <Image mode="widthFix" className="image" src={item.coverImgUrl}></Image>
        <View className="count">{formatCount(item.playCount)}</View>
      </View>
      <View className="bottom" style={{ "-webkit-box-orient": "vertical" }}>
        {item.name}
      </View>
    </SongMenuItemWrapper>
  );
};

export default SoneMenuItem;
