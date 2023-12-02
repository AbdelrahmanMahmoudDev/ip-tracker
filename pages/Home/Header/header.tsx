import Image from 'next/image';
import {Layout} from '../../../components';
import styles from './header.module.css';
import { useIpProvider } from '../../../contexts/ipContext';
import {useState} from 'react';

export function Header() {
    const {ipData, updateIp, updateClickState, updateIsValid, updateIsCustomInput} = useIpProvider();
    const [userInput, setUserInput] = useState("");
    function onUserInput(event: any) {
        if(event.target.value !== "") {
            setUserInput(event.target.value);
        } else {
            updateIsCustomInput(false);
            updateClickState(false);
        }
    }
    function onButtonClick(): any {
        updateClickState(true);
        const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(ipv4Pattern.test(userInput)) {
            updateIsValid(true);
            updateIsCustomInput(true);
            updateIp(userInput);
        } else {
            updateIsValid(false);
        }
    }
    return (
        <header className={styles.header}>
            <Layout>
                <section>
                    <h1>ip address tracker</h1>
                    <div className={styles.inputSection}>
                        <p style={{color: "red", fontWeight: "700", textAlign: "center"}}
                        className={!ipData.isValid && ipData.isClicked ? styles.isEnabled : styles.isDisabled}>
                            Please enter a valid Ip address!
                        </p>
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