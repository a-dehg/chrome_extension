chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    const twitterUrl = new URL(tab.url);
    if (twitterUrl.hostname === 'twitter.com') {
        const username = twitterUrl.pathname.split('/')[1];
        const twitterProfileUrl = `https://twitter.com/${username}`;

        fetch(twitterProfileUrl)
            .then((response) => response.text())
            .then((html) => {
                // Use DOM manipulation to extract the follower count
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const followerCountElement = doc.querySelector('a[data-nav="followers"] span[data-count]');
                const followerCount = followerCountElement ? followerCountElement.getAttribute('data-count') : 'cant find followers';

                document.getElementById('followerCount').textContent = followerCount;
            })
            .catch((error) => {
                console.error(error);
                document.getElementById('followerCount').textContent = 'error';
            });
    } else {
        document.getElementById('followerCount').textContent = 'not on twitter tab';
    }
});