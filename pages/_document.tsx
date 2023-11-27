import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
export default function Document() {
    return (
        <Html>
            <Head>
                {/* Rubik Google Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
    </Html>
    )
}