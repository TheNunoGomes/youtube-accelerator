let speed = 2;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ speed });
});