# Youtube Accelerator v2.0.1

In a hurry?

Customize the playback speed of Youtube Videos.

Supports up to 16x speed!

## Local Installation

1. Clone repository to folder of your choice
2. Open Google Chrome
3. Go to [chrome://extensions/](chrome://extensions/)
4. Enable Developer Mode
5. Click on Load Unpacked
6. Select repository folder
7. All done!

## Chrome Store Installation

Visit [Google's web store](https://chrome.google.com/webstore/detail/youtube-accelerator/ajobbbellhaokbfkgkcpapmbenlccokd) to add the extension to your browser.

## Component

The extension will be located when hovering over the video on the top left.

![Booster Component](./docs/component.png)

## Release Notes

### 2.0.1

- User is able to focus on the on-screen buttons and use the "Space" or the "Enter" keys to decrease/increase (respective to the focused button) playback rate.
- New Hotkeys:
  - Down Arrow - Decreases speed by 0.05
  - Up Arrow - Increases speed by 0.05
  - Number except 0 - Sets the speed to number value
  - Number 0 - Sets the speed to 10x

### 2.0.0

- Changed input in the information bar to controls on top of the video when hovering.
  - Controls are hidden when not hovering over the video
- Video speed is indicated in controls component
- Video speed can be controlled by:
  - Clicking on the buttons
    - Left side decreases
    - Right side increases
  - Hotkeys - Alt + [the following]
    - "-" - Decreases by 0.05
    - "+" - Increases by 0.05

### v1.1.0

- Component is added regardless of user journey on Youtube
- Added session storage support so that the playback speed persists after changing video
- Webpack build for Devs
- Code structure improvements

### v1.0.0

- Moved functionality from popup to component below video
- Component is added when opening video directly from URL
- Component is added when selecting video from home page

### v0.0.1

- Basic functionality implemented in popup
