import Head from 'next/head';
import {Header, Main} from "./Home"

export default function Composite() {
    return (
        <>
            <Head>
                <title>IP Tracker</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <Main />
        </>
    )
}