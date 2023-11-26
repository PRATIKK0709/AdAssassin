const checkInterval = 100;

function skipAds() {
  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button");
  const skipAdButton = document.querySelector(".ytp-ad-skip-button");
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
  const sideAds = document.querySelectorAll(".ytd-display-ad-renderer, .ytd-video-masthead-ad-renderer, .ytd-promoted-video-renderer");
  const companionSlot = document.querySelector(".ytd-companion-slot-renderer");
  const videoAds = document.querySelector(".video-ads.ytp-ad-module");

  sideAds.forEach(sideAd => sideAd.style.display = "none");

  if (companionSlot) {
    companionSlot.remove();
  }

  if (videoAds && videoAds.children.length > 0) {
    videoAds.querySelectorAll('.ytp-ad-module').forEach(ad => ad.remove());
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
