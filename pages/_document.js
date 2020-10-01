import Document, { Head, Main, NextScript } from "next/document";
import { TypographyStyle } from "react-typography";
import typography from "../utils/typography";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <TypographyStyle typography={typography} />
          <meta charset="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
