export default {
  pages: ["pages/home-music/index", "pages/home-vedio/index"],
  requiredBackgroundModes: ["audio"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home-music/index",
        text: "音乐",
        iconPath: "assets/images/tabbar/music_normal.png",
        selectedIconPath: "assets/images/tabbar/music_active.png"
      },
      {
        pagePath: "pages/home-vedio/index",
        text: "视频",
        iconPath: "assets/images/tabbar/video_normal.png",
        selectedIconPath: "assets/images/tabbar/video_active.png"
      }
    ]
  },

  subpackages: [
    {
      root: "packageDetail",
      name: "detail",
      pages: [
        "pages/detail-video/index",
        "pages/detail-search/index",
        "pages/detail-songs/index"
      ]
    },
    {
      root: "packageMusic",
      name: "music",
      pages: ["pages/music-player/index"]
    }
  ]
};
