import { View, Text, Image } from "@tarojs/components";
import { AreaHeaderWrapper } from "./style";

const AreaHeader = ({ title, children, showRight, ...props }) => {
  const defaultSlot = () => {
    return (
      <View className="default">
        <Text>更多</Text>
        <Image
          className="icon"
          src={require("@/assets/images/icons/arrow-right.png")}
          mode="widthFix"
        ></Image>
      </View>
    );
  };
  return (
    <AreaHeaderWrapper>
      <View className="title">{title}</View>
      {!showRight ? (
        <View className="right" onClick={props.onClick}>
          {children ? children : defaultSlot()}
        </View>
      ) : (
        ""
      )}
    </AreaHeaderWrapper>
  );
};

export default AreaHeader;
