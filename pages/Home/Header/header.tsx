import Image from 'next/image';
import {Layout} from '../../../components';
import styles from './header.module.css';
import { useIpProvider } from '../../../contexts/ipContext';

function ErrorMessage({message}: {message: string}) {
    return <p style={{color: "red", fontWeight: "700", textAlign: "center"}}>{message}</p>
}

export function Header() {
    const {ipData, updateIp, updateClickState, updateIsValid, updateIsCustomInput} = useIpProvider();
    function onUserInput(event: any) {
        event.target.value !== "" ? updateIp(event.target.value) : updateIsCustomInput(false);
    }
    function onButtonClick(): any {
        updateClickState(true);
        const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(ipv4Pattern.test(ipData.ipAddress)) {
            updateIsValid(true);
            updateIsCustomInput(true);
        } else {
            updateIsValid(false);
            updateClickState(false);
        }
    }
    return (
        <header className={styles.header}>
            <Layout>
                <section>
                    <h1>ip address tracker</h1>
                    <div className={styles.inputSection}>
                        {!ipData.isValid && ipData.isClicked && <ErrorMessage message="Please enter a valid IP address!" />}
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