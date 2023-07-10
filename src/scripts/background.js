/** @type {Set<string>} */
const URLS = new Set([
  "https://twitter.com/*",
  "https://*.reddit.com/*",
  "https://instagram.com/*",
]);

/**
 * @param {number} tabId
 * @param {chrome.tabs.TabChangeInfo} changeInfo
 * @param {chrome.tabs.Tab} tab
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && URLS.has(tab.url)) {
    chrome.pageAction.show(tabId);
  }
});

/**
 * @param {chrome.tabs.Tab} tab
 */
chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {
    message: "pageAction clicked",
  });
});
