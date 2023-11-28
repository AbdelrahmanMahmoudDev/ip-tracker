import dynamic from 'next/dynamic';
import {InfoDisplay} from '../../../components';

const MapNoSSR = dynamic(() => import("../../../components/Map/map"), {
    ssr: false
});

export function Main() {
    return (
        <>
            <InfoDisplay />
            <MapNoSSR />
        </>
    )
}