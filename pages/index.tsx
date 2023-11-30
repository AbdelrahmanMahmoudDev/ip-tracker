import Head from 'next/head';
import {Header, Main} from "./Home"
import {IpContextProvider} from '../contexts/ipContext'

export default function Composite() {
    return (
        <>
            <Head>
                <title>IP Tracker</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <IpContextProvider>
                <Header />
                <Main />
            </IpContextProvider>
        </>
    )
}