// [03:48.54]致那黑夜中的呜咽与怒吼
// [03:55.81]谁说站在光里的才算英雄
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export default function(lyricString) {
  const lyricStrings = lyricString.split("\n");
  let lyricInfos = [];

  for (let lineString of lyricStrings) {
    const timeResult = timeRegExp.exec(lineString);
    if (!timeResult) return lyricInfos;

    let minute = timeResult[1] * 60 * 1000;
    let second = timeResult[2] * 1000;
    let millsecondTime = timeResult[3];

    let millsecond =
      millsecondTime.length == 3 ? millsecondTime * 1 : millsecondTime * 10;
    // 对应的事件片段 毫秒为单位
    const time = minute + second + millsecond;

    // 2.获取歌词
    const text = lineString.replace(timeRegExp, "");
    lyricInfos.push({
      time,
      text
    });
  }
  return lyricInfos;
}
