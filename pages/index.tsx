import Head from 'next/head';
import {Layout} from '../components';
import styles from "./index.module.css"
export default function Home() {
    return (
        <>
            <Head>
                <title>IP Tracker</title>
                <link rel="icon" href="/favicon.png" />

            </Head>
            <header className={styles.header}>
                <Layout>
                    <section>
                        <h1>ip address tracker</h1>
                        <input type="text" id="ip" name="ip" required placeholder="Search for any IP address or domain"/>
                    </section>
                </Layout>
            </header>
        </>
    )
}