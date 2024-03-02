const CHECK_INTERVAL = 100;
let timer;

const debounce = (func, delay) => {
  clearTimeout(timer);
  timer = setTimeout(() => func.apply(this, arguments), delay);
};

const debouncedHandleYouTube = debounce(handleYouTube, CHECK_INTERVAL);

function safeClick(element) {
  try {
    element?.click();
  } catch (error) {
    console.error('Error clicking element:', error);
  }
}

function skipAds() {
  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button");
  const skipAdButton = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
  const incomingAdAlert = document.querySelector(".ytp-ad-message-container");

  safeClick(adOverlayCloseButton);
  safeClick(skipAdButton);

  incomingAdAlert?.remove();
}

function removeAds() {
  const sideAdsSelector = ".style-scope.ytd-watch-next-secondary-results-renderer.sparkles-light-cta.GoogleActiveViewElement, .style-scope.ytd-item-section-renderer.sparkles-light-cta";
  const sideAds = document.querySelectorAll(sideAdsSelector);

  sideAds.forEach(sideAd => sideAd.style.display = "none");

  const companionSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
  companionSlot?.remove();

  const videoAds = document.querySelector(".video-ads.ytp-ad-module");
  if (videoAds?.children.length > 0) {
    const previewText = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
    const videoElement = document.querySelector(".video-stream.html5-main-video");

    if (previewText) {
      const playbackRateForPreviewText = 16;
      videoElement.playbackRate = playbackRateForPreviewText;
    }
  }
}

function handleYouTube() {
  skipAds();
  removeAds();
}

const observer = new MutationObserver(() => {
  try {
    debouncedHandleYouTube();
  } catch (error) {
    console.error('Error in MutationObserver callback:', error);
  }
});

observer.observe(document.body, { childList: true, subtree: true });

handleYouTube();  // Initial execution
const debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), delay);
  };
};

const checkInterval = 100;
const debouncedHandleYouTube = debounce(handleYouTube, checkInterval);

function safeClick(element) {
  if (element) {
    try {
      element.click();
    } catch (error) {
      console.error('Error clicking element:', error);
    }
  }
}

function skipAds() {
  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button");
  const skipAdButton = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
  const incomingAdAlert = document.querySelector(".ytp-ad-message-container");

  safeClick(adOverlayCloseButton);
  safeClick(skipAdButton);

  incomingAdAlert?.remove();
}

function removeAds() {
  const sideAdsSelector = ".style-scope.ytd-watch-next-secondary-results-renderer.sparkles-light-cta.GoogleActiveViewElement, .style-scope.ytd-item-section-renderer.sparkles-light-cta";
  const sideAds = document.querySelectorAll(sideAdsSelector);

  sideAds.forEach(sideAd => sideAd.style.display = "none");

  const companionSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
  const videoAds = document.querySelector(".video-ads.ytp-ad-module");

  companionSlot?.remove();

  if (videoAds && videoAds.children.length > 0) {
    const previewText = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
    const videoElement = document.querySelector(".video-stream.html5-main-video");

    if (previewText) {
      const playbackRateForPreviewText = 16;
      videoElement.playbackRate = playbackRateForPreviewText;
    }
  }
}

function handleYouTube() {
  skipAds();
  removeAds();
}

const observer = new MutationObserver(debouncedHandleYouTube);
observer.observe(document.body, { childList: true, subtree: true });

handleYouTube();  // Initial execution
