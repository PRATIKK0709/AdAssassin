
# AdAssassin

 AdAssassin Extension is designed to improve the user experience on the YouTube website by automatically managing and removing various types of advertisements that may appear during video playback.

## Variables and Constants

- **checkInterval**: A constant that defines the interval in milliseconds at which the `handleYouTube` function is executed.

## `skipAds` Function

The `skipAds` function is responsible for handling and concealing different types of video ads on YouTube. It looks for three key elements on the page:

- **adOverlayCloseButton**: The button used to close overlay ads.
- **skipAdButton**: The button that allows users to skip video ads.
- **incomingAdAlert**: An alert message that occasionally appears just before an ad begins.

If any of these elements are found, the code takes appropriate actions:

- Clicks the `adOverlayCloseButton` to close overlay ads (if available).
- Clicks the `skipAdButton` to skip video ads (if available).
- Hides the `incomingAdAlert` by setting its style to "none" if it exists.

## `removeAds` Function

The `removeAds` function is designed to eliminate or hide various elements associated with ads on YouTube. It identifies and selects different ad-related elements, including:

- **sideAds**: Elements representing side ads on the YouTube interface, which are hidden by setting their display style to "none."
- **companionSlot**: If found, it removes the companion ad slot, which is typically displayed next to the video player.
- **videoAds**: Selection of the video ads container, along with a check to see if it has child elements. If a `previewText` element is found, it adjusts the video element's playback rate to 16x, effectively shortening ad content.

## `handleYouTube` Function

The `handleYouTube` function serves as a coordinator for the removal of various types of ads. It calls both the `skipAds` and `removeAds` functions to ensure a smoother user experience.

## `setInterval` Function

The `setInterval` function establishes a recurring interval for executing the `handleYouTube` function. This means that every `checkInterval` milliseconds, the code attempts to skip and remove ads from the YouTube page.

## Summary

In summary, this code is designed to enhance the YouTube user experience by automatically managing and removing different types of ads and ad-related elements, resulting in a more uninterrupted interaction with the platform. The script operates at regular intervals to ensure a seamless viewing experience.

# Tutorial 

https://github.com/PRATIKK0709/AdAssassin/blob/main/tutorial.md


