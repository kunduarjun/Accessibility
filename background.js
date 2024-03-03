chrome.runtime.onInstalled.addListener(() => {
    // Set default badge color
    chrome.action.setBadgeBackgroundColor({ color: [0, 0, 0, 0] }); // Transparent
});
  