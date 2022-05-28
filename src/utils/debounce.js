export function debounce(fn, wait, immediate = false, resultCallback) {
  let timer = null;
  let isInvoke = false;

  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer);
      if (immediate && !isInvoke) {
        // 第一次进来立即执行
        const res = fn.apply(this, args);
        resolve(res);
        isInvoke = true;
      } else {
        // 不会立即执行
        timer = setTimeout(() => {
          const res = fn.apply(this, args);
          resolve(res);
          isInvoke = false;
          timer = null;
        }, wait);
      }
    });
  };

  // 取消功能
  _debounce.cancle = function() {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}
