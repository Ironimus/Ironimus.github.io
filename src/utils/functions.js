export const smoothScroll = (target, duration = 500) => {  
  const timingFunc = t => t * t
  let start = null;
  const step = (timestamp) => {
    start = start || timestamp;
    const progress = timestamp - start;
    const time = Math.min(1, ((timestamp - start) / duration));
    window.scrollBy(0, (timingFunc(time) * (target - window.scrollY)));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }; 
  window.requestAnimationFrame(step);
}