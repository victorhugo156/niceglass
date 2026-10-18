import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nice Glass</title>
        <meta
          name="description"
          content="Handmade stained-glass suncatchers from Nice Glass, made and sold one piece at a time."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
