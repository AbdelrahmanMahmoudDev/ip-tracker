import styles from "./infoDisplay.module.css"

export function InfoDisplay({userData}: {userData: any}) {
    return (
        <section className={styles.infoHolder}>
            <ul>
                <li>
                    <h6>ip address</h6>
                    <p>{userData.ip}</p>
                </li>
                <li>
                    <h6>location</h6>
                    <p>{userData.location.city}, {userData.location.country}</p>
                    <p>{userData.location.postalCode}</p>
                </li>
                <li>
                    <h6>timezone</h6>
                    <p>UTC {userData.location.timezone}</p>
                </li>
                <li>
                    <h6>isp</h6>
                    <p>{userData.isp}</p>
                </li>
            </ul>
        </section>
    )
}