import { Component } from "react";
import { Provider } from "react-redux";
import Taro from "@tarojs/taro";
import store from "./store/index";
import "./app.css";
class App extends Component {
  globalData = {
    screenHeight: 0,
    screenWidth: 0,
    statusBarHeight: 0,
    navBarHeight: 44,
    deviceRadio: 2
  };

  constructor() {
    super();

    const info = Taro.getSystemInfoSync();
    this.globalData.screenHeight = info.screenHeight;
    this.globalData.screenWidth = info.screenWidth;
    this.globalData.statusBarHeight = info.statusBarHeight;
    this.globalData.deviceRadio = info.screenHeight / info.screenWidth;
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
