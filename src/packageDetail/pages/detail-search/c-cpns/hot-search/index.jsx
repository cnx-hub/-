import { View, Block } from "@tarojs/components";
import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getSearchHotKeysData } from "../../store/actionCreators";

import { HotSearchWrapper } from "./style";
import AreaHeader from "@/components/area-header";

export const HotSearch = ({ handle }) => {
  const { keywords } = useSelector(
    state => ({
      keywords: state.detailSearch.keywords
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchHotKeysData());
  }, []);

  return (
    <HotSearchWrapper>
      <AreaHeader title={"热门搜索"} showRight={true} />
      <View className="list">
        {keywords.map(item => {
          return (
            <Block key={item.id}>
              <View className="tag" onClick={() => handle(item.first)}>
                {item.first}
              </View>
            </Block>
          );
        })}
      </View>
    </HotSearchWrapper>
  );
};

export default HotSearch;
