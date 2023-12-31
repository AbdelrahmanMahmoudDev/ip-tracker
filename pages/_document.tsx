import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html>
            <Head>
                {/* Rubik Google Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossOrigin=""/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
    </Html>
    )
}