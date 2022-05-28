import Taro from "@tarojs/taro";

export function queryRect(selected) {
  return new Promise(resolve => {
    const query = Taro.createSelectorQuery();

    query.select(selected).boundingClientRect();

    query.exec(function(res) {
      resolve(res);
    });
  });
}
