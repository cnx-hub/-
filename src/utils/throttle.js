export function throttle(
  fn,
  interval,
  options = { leading: true, trailing: false }
) {
  let lastTime = 0;
  let timer = null;
  let { leading, trailing } = options;

  const _throttle = function(...args) {
    return new Promise(resolve => {
      let nowTime = new Date().getTime();

      if (!lastTime && !leading) lastTime = nowTime;
      const remainTime = interval - (nowTime - lastTime);
      
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        const res = fn.apply(this, args);
        resolve(res);
        lastTime =  nowTime;
        return;
      }
      if (!timer && trailing) {
        timer = setTimeout(() => {
          const res = fn.apply(this, args);
          resolve(res);

          lastTime = leading ? new Date().getTime() : 0;
          timer = null;
        }, remainTime);
      }
    });
  };

  return _throttle;
}
