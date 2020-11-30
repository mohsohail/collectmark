chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  console.log(sender);
  console.log(sendResponse);
}

// "web_accessible_resources": ["img/*.jpg"],
// "browser_action": {
//   "default_icon": "collectmark.png",
//   "default_popup": "collectmarkUI/index.html",
//   "default_title": "manage bookmarking"
// }
