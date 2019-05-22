// 函数防抖
export const _debounce = (fn, t) => {
  let delay = t || 500;
  let timer = null;
  return function() {
    const that = this;
    const args = arguments;
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(that, args);
    }, delay);
  }

}

// 函数节流
// export const _throttle = (fn, delay) => {
//   let prev = Date.now();
//   return function(){
//     const that = this;
//     const args = arguments;
//     let now = Date.now();
//     if(now - prev >= delay){
//       fn.apply(that, args);
//       prev = Date.now();
//     }
//   }
// }

// 函数节流
export const _throttle = (fn, t) => {
  let delay = t || 500;
  let timer = null;
  return function(){
    const that = this;
    const args = arguments;
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(that, args);
        timer = null;
      }, delay)
    }
  }
}