function initBooster() {
  if (document.getElementById("yt_acc-container")) return true;

  // Video
  const video = document.querySelector("video.video-stream.html5-main-video");

  sessionRate = window.sessionStorage.getItem("yt-player-playback-rate");
  let playbackRate = sessionRate
    ? JSON.parse(sessionRate).data
    : video.playbackRate;

  // Decrease speed
  const decreaseSpeed = document.createElement("button");
  decreaseSpeed.className = "yt_acc-button";
  decreaseSpeed.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="white" d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" />
  </svg>`;
  decreaseSpeed.title = `Decrease speed (Hot key Alt + "-")`;

  // Speed Indicator
  const speedIndicator = document.createElement("div");
  speedIndicator.id = "yt_acc-speed_indicator";
  speedIndicator.innerText = `${Number(playbackRate).toFixed(2)}x`;
  // Increase speed
  const increaseSpeed = document.createElement("button");
  increaseSpeed.className = "yt_acc-button";
  increaseSpeed.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="white" d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" />
  </svg>`;
  increaseSpeed.title = `Increase speed (Hot key Alt + "+")`;

  // Controls container
  const containerDiv = document.createElement("div");
  containerDiv.id = "yt_acc-container";

  containerDiv.appendChild(decreaseSpeed);
  containerDiv.appendChild(speedIndicator);
  containerDiv.appendChild(increaseSpeed);

  applyStyles(containerDiv);

  const videoContainer = document.getElementById("movie_player");
  videoContainer.parentElement.appendChild(containerDiv);

  video.addEventListener("ratechange", () => {
    playbackRate = video.playbackRate;
    speedIndicator.innerText = `${playbackRate.toFixed(2)}x`;
  });

  videoContainer.addEventListener("mouseenter", () =>
    showControls(containerDiv)
  );
  containerDiv.addEventListener("mouseenter", () => showControls(containerDiv));

  videoContainer.addEventListener("mouseleave", () =>
    hideControls(containerDiv)
  );

  decreaseSpeed.addEventListener("mousedown", () => speedDown(video));
  decreaseSpeed.addEventListener("keydown", (e) => {
    if ([" ", "Enter"].includes(e.key)) {
      speedDown(video);
      return;
    }
  });

  increaseSpeed.addEventListener("mousedown", () => speedUp(video));
  increaseSpeed.addEventListener("keydown", (e) => {
    if ([" ", "Enter"].includes(e.key)) {
      speedUp(video);
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!e.altKey) return;
    if (["-", "ArrowDown"].includes(e.key)) {
      speedDown(video);
      return;
    }
    if (["+", "ArrowUp"].includes(e.key)) {
      speedUp(video);
      return;
    }
    if (Number(e.key)) {
      video.playbackRate = e.key;
    }
    if (e.key === "0") {
      video.playbackRate = "10";
    }
  });
}

function showControls(container) {
  container.style.opacity = 0.5;
}
function hideControls(container) {
  container.style.opacity = 0;
}

function speedUp(video) {
  if (video.playbackRate >= 16) return;
  video.playbackRate = Number(video.playbackRate) + 0.05;
  const sessionRate = {
    data: `${video.playbackRate}`,
    creation: new Date().getTime(),
  };
  window.sessionStorage.setItem(
    "yt-player-playback-rate",
    JSON.stringify(sessionRate)
  );
}
function speedDown(video) {
  if (video.playbackRate <= 0.1) return;
  video.playbackRate = Number(video.playbackRate) - 0.05;
  const sessionRate = {
    data: `${video.playbackRate}`,
    creation: new Date().getTime(),
  };
  window.sessionStorage.setItem(
    "yt-player-playback-rate",
    JSON.stringify(sessionRate)
  );
}

function applyStyles(container) {
  applyContainerClass(container);
  applyYtAccChildrenClass(container);
  applySpeedIndicatorClass(container);
  applyButtonClass(container);
}

function applyButtonClass(container) {
  const elements = container.querySelectorAll(".yt_acc-button");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.cursor = "pointer";
  }
}

function applyContainerClass(container) {
  container.style.width = "15em";
  container.style.height = "3em";
  container.style.zIndex = 3;
  container.style.position = "absolute";
  container.style.top = 0;
  container.style.left = 0;
  container.style.margin = "1em";
  container.style.display = "flex";
  container.style.justifyContent = "space-evenly";
  container.style.alignItems = "center";
  container.style.opacity = "0";
}

function applySpeedIndicatorClass(container) {
  const element = container.querySelector("#yt_acc-speed_indicator");
  element.style.color = "white";
  element.style.backgroundColor = "#222";
  element.style.fontSize = "1.5em";
  element.style.padding = "0 0.5em";
}

function applyYtAccChildrenClass(container) {
  const elements = container.querySelectorAll(`#${container.id} > *`);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.backgroundColor = "#222";
    element.style.height = "100%";
    element.style.width = "25%";
    element.style.border = "solid #222 0px";
    element.style.borderRadius = "0.3em";
    element.style.display = "flex";
    element.style.justifyContent = "space-evenly";
    element.style.alignItems = "center";
  }
}
