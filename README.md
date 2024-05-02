
# AdAssassin

 AdAssassin Extension is designed to improve the user experience on the YouTube website by automatically managing and removing various types of advertisements that may appear during video playback.

## Overview
This script aims to remove ads from YouTube videos by targeting various ad elements and manipulating their display properties. It also includes features like skipping ads and handling popups.

## Codebase Explanation
The codebase consists of several components and functionalities:

### Constants
- `adblocker`: A boolean indicating whether an ad blocker is active.
- `removePopup`: A boolean determining if popups should be removed.
- `debugMessages`: A boolean controlling the display of debug messages.

### Logging Function
A `log()` function is provided to handle logging messages with different levels (`error`, `log`, `warn`, `info`). Debug messages are logged based on the `debugMessages` constant.

### Ad Removal Functions
- `removeAds()`: This function targets and removes video ads. It continuously checks for the presence of ads and removes them accordingly. It also handles skipping ads and adjusting playback settings.
- `removePageAds()`: This function targets and removes page-level ads such as banners, sponsor content, and ad slots.

### YouTube Handling
- `handleYouTube()`: This function orchestrates the ad removal process for YouTube videos. It calls `removeAds()` to start the ad removal process.

### Mutation Observer
A `MutationObserver` is set up to detect changes in the DOM. When changes occur, it triggers the `handleYouTube()` function to ensure ad removal functionality is applied to dynamically loaded content.

### Initialization
The script is self-executing and starts by calling the `handleYouTube()` function to initiate the ad removal process. Additionally, a Mutation Observer is set up to handle dynamically loaded content.

## Usage
To use this script, simply include it in your web browser's developer console or integrate it into a browser extension. Ensure that the script is executed on YouTube's domain to target YouTube ads effectively.

## Notes
- This script may become outdated if YouTube's DOM structure or ad delivery mechanism changes.
- Usage of this script may violate YouTube's terms of service. Proceed with caution and at your own risk.
- Debug messages can be enabled or disabled by modifying the `debugMessages` constant.


## Summary

In summary, this code is designed to enhance the YouTube user experience by automatically managing and removing different types of ads and ad-related elements, resulting in a more uninterrupted interaction with the platform. The script operates at regular intervals to ensure a seamless viewing experience.

# Tutorial 

https://github.com/PRATIKK0709/AdAssassin/blob/main/tutorial.md

## Support

If you find this project useful or interesting, you can support my work by buying me a coffee! Every cup fuels more cool projects like this!

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/peace0709)


