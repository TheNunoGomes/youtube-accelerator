const refresh = setInterval(() => {
  if (!location.href.match(/^https\:\/\/www.youtube.com\/watch\?*/g)) return;
  initBooster();
  clearInterval(refresh);
}, 500);
