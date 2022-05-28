import Taro from "@tarojs/taro";

const BASE_URL = "https://coderwhy-music.vercel.app/";

class Nxrequest {
  request(url, data, method) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: BASE_URL + url,
        data: data,
        method: method,
        success: function(res) {
          resolve(res.data);
        },
        fail: function(err) {
          reject(err);
        }
      });
    });
  }

  get(url, data) {
    return this.request(url, data, "GET");
  }

  post(url, data) {
    return this.request(url, data, "POST");
  }
}

const request = new Nxrequest();

export default request;
