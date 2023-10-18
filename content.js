const checkInterval = 100;

function skipAds() {
  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button");
  const skipAdButton = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
  const incomingAdAlert = document.querySelector(".ytp-ad-message-container");

  if (adOverlayCloseButton) {
    adOverlayCloseButton.click();
  }

  if (skipAdButton) {
    skipAdButton.click();
  }

  if (incomingAdAlert) {
    incomingAdAlert.style.display = "none";
  }
}

function removeAds() {
  const sideAds = document.querySelectorAll(".style-scope.ytd-watch-next-secondary-results-renderer.sparkles-light-cta.GoogleActiveViewElement, .style-scope.ytd-item-section-renderer.sparkles-light-cta");
  const companionSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
  const videoAds = document.querySelector(".video-ads.ytp-ad-module");

  sideAds.forEach(sideAd => sideAd.style.display = "none");

  if (companionSlot) {
    companionSlot.remove();
  }

  if (videoAds && videoAds.children.length > 0) {
    const previewText = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
    const videoElement = document.querySelector(".video-stream.html5-main-video");

    if (previewText) {
      videoElement.playbackRate = 16;
    }
  }
}

function handleYouTube() {
  skipAds();
  removeAds();
}

setInterval(handleYouTube, checkInterval);
