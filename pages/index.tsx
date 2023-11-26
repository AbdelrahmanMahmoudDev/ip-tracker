import Head from 'next/head';
import {Layout} from '../components';
import styles from "./index.module.css";
import Image from "next/image";
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
                        <div className={styles.inputSection}>
                            <input type="text" id="ip" name="ip" required placeholder="Search for any IP address or domain"/>
                            <button>
                                <Image width={11} height={14} src="images/icon-arrow.svg" alt="submit"/>
                            </button>
                        </div>
                    </section>
                </Layout>
            </header>
        </>
    )
}