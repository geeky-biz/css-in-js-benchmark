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
    - [Styled Components Run Results](https://webpagetest.org/result/211021_BiDc8W_7fee7dc0148745599ce0b34833eddfb7/)
    - [Linaria Run Results](https://webpagetest.org/result/211021_BiDcD9_2176f341c7569bbbbb953780bed54bdb/)
- The start render for the linaria page was 1.6s as compared to the same for styled-components at 1.5s. (Need to delve deeper to understand why.)
- The JS loaded for `/linaria` is 77 kB gzipped while the same for `/styled-components` is 89 kB. This difference can be attributed to the difference in the size of the two packages.

# Re-rendering Performance:
- The rerendering performance was measured by loading the page on Xiaomi Mi A2 mobile (on Chrome 94.0.4 measured via Remote Debugging devtools - Performance tab).
- The library versions for this run were - linaria 3.0, styled components 5.3.3
- The runs were undertaken 5 times and below are the median numbers:
![Rendering Performance styled-components vs linaria vs baseline (css modules)](https://user-images.githubusercontent.com/17068206/138451295-8dd93d09-f350-49bd-87ef-997d8cc0e3bd.png)

# Relavent reading material:
- https://github.com/styled-components/styled-components/issues/2377
- CSS variables performance : https://lisilinhart.info/posts/css-variables-performance/