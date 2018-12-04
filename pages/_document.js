import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head>
            <style>
                {`
                html {
                    line-height: 1.15;
                    size-adjust: 100%;
                }
                body {
                    margin: 0;
                    background-color: #FFFFFF;
                }
                article,
                aside,
                footer,
                header,
                nav,
                section {
                    display: block;
                }
            `}
            </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
