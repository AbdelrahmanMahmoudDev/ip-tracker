import { MapContainer, TileLayer } from 'react-leaflet'
import styles from "./map.module.css"

// WARNING
// This component must be lazy loaded because Leaflet doesn't support SSR!
// That's why it can be used in barrel imports and has to be explicitly
// imported wherever used

export default function Map() {
    return (
      <>
          <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
      </>
    )
}