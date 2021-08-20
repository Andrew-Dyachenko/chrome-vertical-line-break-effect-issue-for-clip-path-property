# Chrome vertical line break effect issue for `clip-path` CSS property

## 🐛 Issue report

There is an issue for the browsers listed in the table below, and in particular for the Google Chrome browser and its family. The issue is with the CSS `clip-path` property expressed by applying it on a pseudo-element with a given background color and attached absolute positioning to the edge of the parent element with the same background color as the pseudo-element. If we try to change the size of the available space for an element with a pseudo-element attached to its edge, for example, by changing the size of the common container, then in the dynamics of this change we will see small breaks in the docking of the pseudo-element expressed by translucency.

## 📺 Examples

### ⚠️ Current behavior

![Google Chrome 92 circled video, shows current behavior about vertical line break effect issue for clip-path CSS property at the pseudo element](https://github.com/Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property/raw/main/issue-report/chrome/chrome_current_behavior.gif)

Google Chrome circled [video](https://github.com/Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property/blob/main/issue-report/chrome/chrome_current_behavior.mov?raw=true) of current behavior

![Google Chrome 92 screenshot, shows current behavior about vertical line break effect issue for clip-path CSS property at the pseudo element](https://github.com/Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property/raw/main/issue-report/chrome/chrome_current_behavior.png)

Google Chrome screenshot of current behavior

### ✅ Expected behavior

![Google Chrome 92 circled video,shows expected absent behavior about vertical line break effect issue for clip-path CSS property at the pseudo element](https://github.com/Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property/raw/main/issue-report/firefox/firefox_expected_behavior.gif)

Firefox circled [video](https://andrew-dyachenko.github.io/chrome-vertical-line-break-effect-issue-for-clip-path-property/issue-report/firefox/firefox_expected_behavior.mov?raw=true) of expected behavior

![Google Chrome 92 screenshot, shows expected absent behavior about vertical line break effect issue for clip-path CSS property at the pseudo element](https://github.com/Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property/raw/main/issue-report/chrome/chrome_expected_behavior.png)

Google Chrome screenshot of expected behavior

## 🕹 Playground

You can see an example live in one of the ways:

- Right in your browser at the [link](https://andrew-dyachenko.github.io/chrome-vertical-line-break-effect-issue-for-clip-path-property/)
- Open example at the [Codesandbox](https://codesandbox.io/s/divine-butterfly-h0j94)
- By cloning and running this project on your computer

### 🛰 Live

To see it live use the Github pages link [https://andrew-dyachenko.github.io/chrome-vertical-line-break-effect-issue-for-clip-path-property/](https://andrew-dyachenko.github.io/chrome-vertical-line-break-effect-issue-for-clip-path-property/)

### 🏖 Codesandbox

To see it in sandbox and try to change the code use the Codesandbox link [https://codesandbox.io/s/divine-butterfly-h0j94](https://codesandbox.io/s/divine-butterfly-h0j94)

### 👨‍💻 Clone & Run

Open your terminal and go to your sites directory or other suitable directory

```bash
cd ~/Sites
```
Clone the repository
```bash
git clone git@github.com:Andrew-Dyachenko/chrome-vertical-line-break-effect-issue-for-clip-path-property.git
```
Go to cloned repository
```bash
cd chrome-vertical-line-break-effect-issue-for-clip-path-property/
```
Install dependencies
```bash
npm i
```
Start the project with command `start` OR with `parcel-start` command if you need live reload on a change events
```bash
npm run start
```
[http://localhost:5000](http://localhost:5000)
&nbsp;

OR with live reload
&nbsp;

```bash
npm run parcel-start
```
[http://localhost:1234/](http://localhost:1234/)

> macOS Clone & Run example

## 🌍 Environment

| Software            | Version(s)                                  | Issue exist   |
| :------------------ | :------------------------------------------ | :-----------: |
| Firefox             | 🍏 91.0.1 (64-bit)                          | ✅ No         |
| Google Chrome       | 🍏 92.0.4515.159 (Official build), (x86_64) | ⚠️ Yes        |
| Microsoft Edge      | 💻 91.0.864.67 (Official build), (64-bit)   | ⚠️ Yes        |
| Opera               | 🍏 78.0.4093.147 (x86_64)                   | ⚠️ Yes        |
| Safari              | 🍏 14.1.2 (16611.3.10.1.6)                  | ✅ No         |
| Yandex browser      | 🍏 21.6.0.1108 (64-bit)                     | ⚠️ Yes        |

&nbsp;

| Operating system(s)    | Version(s)       |
| :--------------------- | :--------------- |
| 🍏 macOS Big Sur       | 11.5.2 (20G95)   |
| 💻 Windows 10 Pro      | 1909 (18363.836) |

## 🚧 Finalizing the issue report

I have not tested the same issue with horizontal lines, I hope soon a browser developers will check and fix this issue and at the same time will check the horizontal case if it exists.
Reported Chrome (Chromium) issue is also published [here](https://bugs.chromium.org/p/chromium/issues/detail?id=1241892).

If you went to the Github pages with an [example](https://andrew-dyachenko.github.io/chrome-vertical-line-break-effect-issue-for-clip-path-property/) and do not see this issue, then most likely the browser developers have already fixed this issue. Let's rejoice! Yay!
