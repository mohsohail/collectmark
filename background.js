console.log("background script running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tabs) {
  console.log("tabbin");
  chrome.tabs.sendMessage(tabs.id, { hello: "world" });
}

// chrome.browserAction
// chrome.tabs
