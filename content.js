
(function() {
    'use strict';

    const adblocker = true;
    const removePopup = false;
    const debugMessages = true;

    let currentUrl = window.location.href;
    let isAdFound = false;
    let adLoop = 0;

    function log(log, level = 'l', ...args) {
        if (!debugMessages) return;

        const prefix = 'Remove YouTube Ads:';
        const message = `${prefix} ${log}`;
        switch (level) {
            case 'e':
            case 'err':
            case 'error':
                console.error(message, ...args);
                break;
            case 'l':
            case 'log':
                console.log(message, ...args);
                break;
            case 'w':
            case 'warn':
            case 'warning':
                console.warn(message, ...args);
                break;
            case 'i':
            case 'info':
            default:
                console.info(message, ...args);
                break;
        }
    }

    function removeAds() {
        log("removeAds()");
        setInterval(() => {
            const video = document.querySelector('video');
            const ad = [...document.querySelectorAll('.ad-showing')][0];

            if (window.location.href !== currentUrl) {
                currentUrl = window.location.href;
                removePageAds();
            }

            if (ad) {
                isAdFound = true;
                adLoop++;

                if (adLoop < 10) {
                    const openAdCenterButton = document.querySelector('.ytp-ad-button-icon');
                    openAdCenterButton?.click();

                    const blockAdButton = document.querySelector('[label="Block ad"]');
                    blockAdButton?.click();

                    const blockAdButtonConfirm = document.querySelector('.Eddif [label="CONTINUE"] button');
                    blockAdButtonConfirm?.click();

                    const closeAdCenterButton = document.querySelector('.zBmRhe-Bz112c');
                    closeAdCenterButton?.click();
                } else {
                    if (video) video.play();
                }

                const popupContainer = document.querySelector('body > ytd-app > ytd-popup-container > tp-yt-paper-dialog');
                if (popupContainer && popupContainer.style.display === "")
                    popupContainer.style.display = 'none';

                log("Found Ad");

                const skipButtons = ['ytp-ad-skip-button-container', 'ytp-ad-skip-button-modern', '.videoAdUiSkipButton', '.ytp-ad-skip-button', '.ytp-ad-skip-button-modern', '.ytp-ad-skip-button', '.ytp-ad-skip-button-slot'];
                if (video) {
                    video.playbackRate = 10;
                    video.volume = 0;
                    skipButtons.forEach(selector => {
                        const elements = document.querySelectorAll(selector);
                        if (elements && elements.length > 0) {
                            elements.forEach(element => {
                                element?.click();
                            });
                        }
                    });
                    video.play();
                    let randomNumber = Math.random() * (0.5 - 0.1) + 0.1;
                    video.currentTime = video.duration + randomNumber || 0;
                }
                log("Skipped Ad (✔️)");
            } else {
                if (video && video?.playbackRate === 10) video.playbackRate = 1;
                if (isAdFound) {
                    isAdFound = false;
                    if (video && isFinite(video.playbackRate)) video.playbackRate = video.playbackRate;
                    adLoop = 0;
                } else {
                    if (video) video.playbackRate = video.playbackRate;
                }
            }
        }, 50);
        removePageAds();
    }

    function removePageAds() {
        const sponsor = document.querySelectorAll("div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy");
        const style = document.createElement('style');
        style.textContent = `
            ytd-action-companion-ad-renderer,
            ytd-display-ad-renderer,
            ytd-video-masthead-ad-advertiser-info-renderer,
            ytd-video-masthead-ad-primary-video-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-ad-slot-renderer,
            yt-about-this-ad-renderer,
            yt-mealbar-promo-renderer,
            ytd-statement-banner-renderer,
            ytd-ad-slot-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-banner-promo-renderer-background
            statement-banner-style-type-compact,
            .ytd-video-masthead-ad-v3-renderer,
            div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
            div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
            div#main-container.style-scope.ytd-promoted-video-renderer,
            div#player-ads.style-scope.ytd-watch-flexy,
            ad-slot-renderer,
            ytm-promoted-sparkles-web-renderer,
            masthead-ad,
            tp-yt-iron-overlay-backdrop,
            #masthead-ad {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        sponsor?.forEach((element) => {
            if (element.getAttribute("id") === "rendering-content") {
                element.childNodes?.forEach((childElement) => {
                    if (childElement?.data.targetId && childElement?.data.targetId !== "engagement-panel-macro-markers-description-chapters") {
                        element.style.display = 'none';
                    }
                });
            }
        });
        log("Removed page ads (✔️)");
    }

    function handleYouTube() {
        removeAds();
    }

    const observer = new MutationObserver(() => {
        try {
            handleYouTube();
        } catch (error) {
            console.error('Error in MutationObserver callback:', error);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    handleYouTube();  // Initial execution
})();
