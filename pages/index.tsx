import Head from 'next/head';
import Header from "./Home/Header/header"
import Main from "./Home/Main/main"
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