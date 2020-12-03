const bookmarkFolderMap = {
  bookmarksBar: "1",
  otherBookmarksBar: "2",
  mobileBookmarksBar: "3",
};

chrome.tabs.query({}, function (tabs) {
  let urlsToBookmark = [];
  if (tabs.length) {
    tabs.forEach(function (tab) {
      urlsToBookmark.push(tab.url);
    });
  }
  if (urlsToBookmark.length !== 0) {
    searchBookmark(urlsToBookmark);
  }
});

function searchBookmark(urlsToBookmark) {
  chrome.bookmarks.search({ title: "Collectmarks" }, function (folder) {
    if (folder.length !== 0) {
      chrome.bookmarks.create(
        {
          parentId: bookmarkFolderMap["bookmarksBar"],
          title: "Collectmarks",
        },
        function () {
          bookmarkUrls(urlsToBookmark);
        }
      );
    } else {
      bookmarkUrls(urlsToBookmark);
    }
  });
}

function bookmarkUrls(urls) {
  urls.forEach(function (url) {
    chrome.bookmarks.create({
      parentId: bookmarkFolderMap["bookmarksBar"],
      title: "Collectmarks",
      url: url,
    });
  });
}
