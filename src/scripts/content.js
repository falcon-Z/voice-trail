chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.message === "pageAction clicked") {
    console.log(`Tab ID: ${sender.tab.id}`);
    console.log(`URL: ${sender.tab.url}`);
  }
});
