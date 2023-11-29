import dynamic from 'next/dynamic';
import {InfoDisplay} from '../../../components';
import useSWR from "swr";

const apiKey = "at_rtj7CKoS50MByFdyBuSYI1bo7FFHB";

function useSWRDefaultData(): any {
    const defaultIpURL = 'https://api.ipify.org?format=json'
    const fetcher = (getDefaultIp: string) =>
        fetch(getDefaultIp)
        .then(res => res.json())
        .then(defaultIp => fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${defaultIp.ip}`))
        .then(res => res.json())

    const {data, error, isLoading} = useSWR(defaultIpURL, fetcher);

    return {
        userData: data,
        getError: error,
        loading: isLoading,
    }
}

const MapNoSSR = dynamic(() => import("../../../components/Map/map"), {
    ssr: false
});

export function Main() {
    const {userData, getError, loading} = useSWRDefaultData();
    if(getError) return <p style={{color: "red", fontWeight: 700, textAlign: "center"}}>Failed to load</p>;
    if(loading) return <p style={{color: "green", fontWeight: 700, textAlign: "center"}}>Loading...</p>;
    return (
        <>
            <InfoDisplay userData={userData}/>
            <MapNoSSR latitude={userData.location.lat} longitude={userData.location.lng}/>
        </>
    )
}