import Head from 'next/head';
import {Layout} from '../components';

export default function Home() {
    return (
        <>
            <Head>
                <title>IP Tracker</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>
                <h1>Hello, World!</h1>
            </Layout>
        </>
    )
}