chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.sendMessage(tabId, {
    type: "tabUpdated",
    tabId: tabId,
    url: tab.url,
  });
});
