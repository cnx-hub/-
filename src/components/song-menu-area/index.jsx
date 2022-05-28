import AreaHeader from "@/components/area-header";
import { ScrollView, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import { SongMenuAreaWrapper } from "./style";
import SoneMenuItem from "@/components/song-menu-item";

const SongMenuArea = ({ title, songMenu }) => {
  const handleItemClick = id => {
    Taro.navigateTo({
      url: `/packageDetail/pages/detail-songs/index?id=${id}&type=menu`
    });
  };
  return (
    <SongMenuAreaWrapper>
      <AreaHeader title={title} />
      <ScrollView className="menu-list" scrollX>
        {songMenu &&
          songMenu.map(item => {
            return (
              <View
                key={item.id}
                className="menu-item"
                onClick={() => handleItemClick(item.id)}
              >
                <SoneMenuItem item={item}></SoneMenuItem>
              </View>
            );
          })}
      </ScrollView>
    </SongMenuAreaWrapper>
  );
};

export default SongMenuArea;
