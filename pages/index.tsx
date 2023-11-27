import Head from 'next/head';
import {Layout} from '../components';
import styles from "./index.module.css";
import Image from "next/image";
import {Header} from "./Home"

export default function Composite() {
    return (
        <>
            <Head>
                <title>IP Tracker</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header></Header>
        </>
    )
}