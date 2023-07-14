const main = () => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "tabUpdated") {
      const { tabId, url } = message;

      if (sender.url.includes("reddit.com")) {
        chrome.action.setBadgeText({ text: "ON" });
        console.log(tabId, url);
      } else {
        chrome.action.setBadgeText({ text: "OFF" });
      }
    }
  });
};

main();
