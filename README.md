# Libraries compared:
- CSS modules (baseline)
- [linaria](https://github.com/callstack/linaria)
- [styled-components](https://github.com/styled-components/styled-components)

# About the setup:
- This is a Next.js SSR repository with three URLs - one for linaria (/linaria), one for styled components (/styled-components) and one for the css modules (/regularcss).
- All the URLs load the same component - containing 22 buttons that change their color every 1 second as the React component is rerendered (via state change).
- The styling CSS for these URLs is setup to be generated on the SSR and set internal via `<style>` tag within the page's HTML.
- The URLs are:
    - `/linaria` - the page's styling is handled via linaria.
    - `/styled-components` - the page's styling is handled via styled components.
    - `/regularcss` - CSS modules.

# Page Loading Performance:
- The page loading test was done via WPT (Fast 3G - Virginia, US - Emulated Moto G4):
    - [CSS Modules](https://webpagetest.org/result/211101_BiDcEH_ada7ca6525b9962d346da98981849eec/)
    - [Styled Components Run Results](https://webpagetest.org/result/211101_AiDcPN_e113b1f943b26de22031adbfcfd72e5a/)
    - [Linaria Run Results](https://webpagetest.org/result/211101_BiDc0A_7c76dbbd71f325008e7aa52e81e70c4f/)
- The `start render` and the LCP for all the three URLs were similar (no notable deviation).
- The amount of JavaScript loaded for the three routes (sizes in gzipped kBytes):
    - CSS modules : 70.3 kB
    - linaria : 72.4 kB
    - styled-components : 84.1 kB

# Re-rendering Performance:
- The rerendering performance was measured by loading the page on Xiaomi Mi A2 mobile (on Chrome 94.0.4 measured via Remote Debugging devtools - Performance tab).
- The library versions for this run were - linaria 3.0, styled components 5.3.3
- The runs were undertaken 5 times and below are the median numbers:
![Rendering Performance styled-components vs linaria vs baseline (css modules)](https://user-images.githubusercontent.com/17068206/138451295-8dd93d09-f350-49bd-87ef-997d8cc0e3bd.png)

# Relavent reading material:
- https://github.com/styled-components/styled-components/issues/2377
- CSS variables performance : https://lisilinhart.info/posts/css-variables-performance/