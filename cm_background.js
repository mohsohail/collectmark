chrome.tabs.query({}, function (tabs) {
  console.log(tabs);
  if (tabs.length) {
    let urls = [];
    tabs.forEach(function (tab) {
      urls.push(tab.url);
    });
    console.log(urls);
  }
});

// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tabs) {
//   chrome.tabs.sendMessage(tabs.id, { hello: "world" });
// }
