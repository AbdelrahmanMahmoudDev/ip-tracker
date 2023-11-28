import Head from 'next/head';
import Image from 'next/image';
import {Layout} from '../../../components';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Layout>
                <section>
                    <h1>ip address tracker</h1>
                    <div className={styles.inputSection}>
                        <input type="text" id="ip" name="ip" required placeholder="Search for any IP address or domain" />
                        <button>
                            <Image width={11} height={14} src="images/icon-arrow.svg" alt="submit" />
                        </button>
                    </div>
                </section>
            </Layout>
        </header>
        )
}