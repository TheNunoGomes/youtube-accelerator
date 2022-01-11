const setSpeed = document.getElementById("set-speed");

setSpeed.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if(tab.url.startsWith("https://www.youtube.com")) {
    var playbackSpeed = document.getElementById("playback-speed").value;
    
    await chrome.storage.sync.set({ playbackSpeed });
    
    document.getElementById("current-speed").innerHTML = `Playing at ${playbackSpeed}x speed`
    
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {        
        chrome.storage.sync.get("playbackSpeed", ({ playbackSpeed }) => {
          const videoPlayer = document.getElementsByClassName('video-stream html5-main-video')[0]
          videoPlayer.playbackRate = Number(playbackSpeed)
        });
      }      
    });    
  }

});