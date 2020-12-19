const bookmarkFolderMap = {
  bookmarksBar: "1",
  otherBookmarksBar: "2",
  mobileBookmarksBar: "3",
};

chrome.tabs.query({}, function (tabs) {
  let urlsToBookmark = [];
  if (tabs.length) {
    tabs.forEach(function (tab) {
      const { title, url } = tab;
      urlsToBookmark.push({
        title,
        url,
      });
    });
  }
  if (urlsToBookmark.length !== 0) {
    bookmarkUrls(urlsToBookmark);
  }
});

function bookmarkUrls(urls) {
  urls.forEach(function (urlData) {
    chrome.bookmarks.create({
      parentId: bookmarkFolderMap["bookmarksBar"],
      title: urlData.title,
      url: urlData.url,
    });
  });
}
