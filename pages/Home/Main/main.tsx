import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css"

const MapNoSSR = dynamic(() => import("../../../components/Map/map"), {
    ssr: false
});

export function Main() {
    return (
        <>
            <MapNoSSR />
        </>
    )
}