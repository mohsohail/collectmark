console.log("chrome script go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  console.log(sender);
  console.log(sendResponse);
}
