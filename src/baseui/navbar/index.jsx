import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import { NavBarWrapper } from "./style";

const NavBar = ({ children, handle }) => {
  const globalData = Taro.getApp().$app.globalData;
  const statusBarHeight = globalData.statusBarHeight;
  const navBarHeight = globalData.navBarHeight;

  // 具名插槽的实现
  children = Array.isArray(children) ? children : [children];
  const slots = children.reduce((slots, item) => {
    if (!item) return slots;
    slots[item.props.slot] = item;
    return slots;
  }, {});

  return (
    <NavBarWrapper>
      <View style={{ height: statusBarHeight }}></View>
      <View className="nav-bar" style={{ height: navBarHeight }}>
        <View className="left" onClick={handle}>
          {slots["left"] ? (
            slots["left"]
          ) : (
            <Image
              mode="widthFix"
              className="icon"
              src={require("@/assets/images/icons/arrow-left.png")}
            />
          )}
        </View>

        <View className="center">
          {slots["center"] ? slots["center"] : <View>默认标题</View>}
        </View>

        <View className="right">{slots["right"] ? slots["right"] : ""}</View>
      </View>
    </NavBarWrapper>
  );
};

export default NavBar;
