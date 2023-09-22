chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "extractUserInteractionCount") {
        const interactionCount = extractUserInteractionCountFromPage();
        sendResponse({ userInteractionCount: interactionCount });
    }
});