# Libraries compared:
- [linaria](https://github.com/callstack/linaria)
- [styled-components](https://github.com/styled-components/styled-components)

# About the setup:
- This is a Next.js SSR repository with two URLs - one for linaria and another for styled components.
- Both the URLs load the same component - containing 22 buttons that change their color every 1 second as the React component is rerendered (due to state change).
- The styling CSS for both the URLs is setup to be generated on the SSR and set internal via `<style>` tag within the page's HTML.
- The two URLs are:
    - `/linaria` - the page's styling is handled via linaria.
    - `/styled-components` - the page's styling is handled via styled components.

# Page Loading Performance:
- The page loading test was done via WPT (Fast 3G - Virginia, US - Emulated Moto G4):
    - [Styled Components Run Results](https://webpagetest.org/result/211021_BiDc8W_7fee7dc0148745599ce0b34833eddfb7/)
    - [Linaria Run Results](https://webpagetest.org/result/211021_BiDcD9_2176f341c7569bbbbb953780bed54bdb/)
- The start render for the styled-components page was 1.6s as compared to the same for linaria at 1.5s.

# Re-rendering Performance:
- The rerendering performance was measured by loading the page on Xiaomi Mi A2 mobile (on Chrome 94.0.4 measured via Remote Debugging devtools - Performance tab).
- The library versions for this run were - linaria 3.0, styled components 5.3.3
- The runs were undertaken 5 times and below are the median numbers:
- Styled Components:
    - Scripting : 183 ms
    - Rendering : 19 ms
    - Painting : 14 ms
    - System : 21 ms
- Linaria:
    - Scripting : 131 ms
    - Rendering : 32 ms
    - Painting : 16 ms
    - System : 21 ms

# Relavent reading material:
- https://github.com/styled-components/styled-components/issues/2377
