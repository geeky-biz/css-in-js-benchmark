import Document, { Head, Html, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { extractCss } from 'goober';
import { readFileSync } from "fs";
import { join } from "path";

class StylesInlinedHead extends Head {
  getCssLinks({ allFiles }) {
		const { assetPrefix } = this.context
		if (!allFiles || allFiles.length === 0) return null

		return allFiles
			.filter((file) => /\.css$/.test(file))
			.map((file) => (
				<style
					key={file}
					nonce={this.props.nonce}
					data-href={`${assetPrefix}/_next/${file}`}
					dangerouslySetInnerHTML={{
						__html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
					}}
				/>
			))
	}
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {

    console.log('Executing document getInitialProps')
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const gooberStyles = extractCss();
      return {
        ...initialProps,
        gooberStyles,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <style
            // goober is a bit more 'raw' and needs the end-user to
            // define the style tag. Otherwise, it'll create a new style tag
            // and you'll get the flash of unstyled content.
            id={'_goober'}
            dangerouslySetInnerHTML={{ __html: ' ' + this.props.gooberStyles }}
          />
        </Head>
        <StylesInlinedHead>
          <meta name="theme-color" content="#fff" />
        </StylesInlinedHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }  
}
