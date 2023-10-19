
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

In summary, this code is designed to enhance the YouTube user experience by automatically managing and removing different types of ads and ad-related elements, resulting in a more uninterrupted interaction with the platform. The script operates at regular intervals to ensure a seamless viewing experience.

## Video tutorial

Yes dumbs, got you covered- https://youtu.be/i3T6BS1heYc

## Installation

Follow these steps to install the YouTube Ad Sniper Extension on your Google Chrome browser:

1. **Download the Extension:**

   - Click the "Code" button at the top of this GitHub repository.
   - Select "Download ZIP" to download the extension files to your computer.

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164194156286054520/download_zip.png?ex=6542534c&is=652fde4c&hm=2d5de0b6de114aff1199feba21dfb24ee545b3c4262646567e7647a94d6d4aa9&" width="550" height= "350">

2. **Unzip the Files:**

   - Locate the downloaded ZIP file (usually in your "Downloads" folder) and unzip it.
   - You can do this by right-clicking on the ZIP file and selecting "Extract All" (or a similar option depending on your operating system).

3. **Open Chrome's Extension Page:**

   - In your Google Chrome browser, go to the menu (three vertical dots in the top-right corner) and select "More tools" > "Extensions."

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164195101350834226/Screenshot_2023-10-18_at_7.05.32_PM.png?ex=6542542d&is=652fdf2d&hm=cd7e8c1e77074a8e49d325620b14cd2cf1f2ab2252f00bf6a97a3cd91607dd0f&" width="500" height="250">

4. **Enable Developer Mode:**

   - In the Extensions page, make sure the "Developer mode" checkbox in the top-right corner is checked.

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164195344167481375/Screenshot_2023-10-18_at_7.06.33_PM.png?ex=65425467&is=652fdf67&hm=dd28abe62e298a0a563e9a5308b5952f3746ac6608119f331acf7e65dee4bad1&" width="800" height="40">

5. **Load the Extension:**

   - Click the "Load unpacked" button that appears after enabling Developer mode.
   - Browse to the folder where you unzipped the extension files and select the extension folder.

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164197453927559288/Screenshot_2023-10-18_at_7.14.54_PM.png?ex=6542565e&is=652fe15e&hm=eacb148f853207a51905b5a93b6d58c034542c3599d1d7f0abe4d68b940a1e0e&" width="800" height="40">

- make sure it looks like this after you choose the folder where you extracted the zip file.

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164197983525548122/Screenshot_2023-10-18_at_7.17.00_PM.png?ex=654256dd&is=652fe1dd&hm=c713617d429e335368a8ef4ad2e74faf53aa3b1862d484e3c92869f96e280ff0&" width="500" height="300">

6. **Activate the Extension:**

   - Once you've loaded the extension, it should appear in the list of installed extensions.
   - Make sure the toggle switch next to the "AdAssassin" is set to ON.

<img src="https://cdn.discordapp.com/attachments/1162468054333132884/1164198505217273946/Screenshot_2023-10-18_at_7.19.07_PM.png?ex=65425759&is=652fe259&hm=f3a7dcf3befe1e4e8eac010816a9c5fdf73e374fd0bfef8d3c6d59a407361695&" width="400" height="250">

## Usage

Now that the extension is installed and active, enjoy your ad-free YouTube experience. Visit YouTube, play a video, and let the extension do the work for you.

## Support

If you encounter any issues, have questions, or want to contribute to the development of this extension, please open an issue or submit a pull request also you can reach me out at peacefordevelopment0709@gmail.com if you need any help or you have any issue with this repo.

Happy ad-free YouTube browsing!

