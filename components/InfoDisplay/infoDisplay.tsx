import styles from "./infoDisplay.module.css"
import useSWR from "swr";

const apiKey = "at_rtj7CKoS50MByFdyBuSYI1bo7FFHB";
const ipAddress = "102.40.62.43";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function InfoDisplay() {
    const { data, error } = useSWR(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`, fetcher)
    if(error) return <p style={{color: "red", fontWeight: 700, textAlign: "center"}}>Failed to load</p>
    if(!data) return <p style={{color: "green", fontWeight: 700, textAlign: "center"}}>Loading...</p>
    console.log(data)
    const dataCollection = [{
        ip: data.ip,
        city: data.location.city,
        region: data.location.region,
        postCode: data.location.postalCode,
        timeZone: data.location.timezone,
        isp: data.isp,
    },]

    return (
        <section className={styles.infoHolder}>
            {dataCollection.map((data, index) => {
                return (
                        <ul key={index}>
                            <li>
                                <h6>ip address</h6>
                                <p>{data.ip}</p>
                            </li>
                            <li>
                                <h6>location</h6>
                                <p>{data.city}, {data.region}</p>
                                <p>{data.postCode}</p>
                            </li>
                            <li>
                                <h6>timezone</h6>
                                <p>UTC {data.timeZone}</p>
                            </li>
                            <li>
                                <h6>isp</h6>
                                <p>{data.isp}</p>
                            </li>
                        </ul>
                    )
            }
            )}
        </section>
    )
}