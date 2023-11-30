import Image from 'next/image';
import {Layout} from '../../../components';
import styles from './header.module.css';
import { useIpProvider } from '../../../contexts/ipContext';

export function Header() {
    const {ipData, updateIp, updateClickState} = useIpProvider();
    function onUserInput(event: any) {
        updateIp(event.target.value);
    }
    function onButtonClick(): any {
        const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(ipv4Pattern.test(ipData.ipAddress)) {
            updateClickState(!ipData.isClicked);
            console.log(!ipData)
        }
    }
    return (
        <header className={styles.header}>
            <Layout>
                <section>
                    <h1>ip address tracker</h1>
                    <div className={styles.inputSection}>
                        <input type="text" id="ip" name="ip" required
                        onChange={e => onUserInput(e)}
                        placeholder="Search for any IP address or domain" />
                        <button onClick={onButtonClick}>
                            <Image width={11} height={14} src="images/icon-arrow.svg" alt="submit" />
                        </button>
                    </div>
                </section>
            </Layout>
        </header>
        )
}