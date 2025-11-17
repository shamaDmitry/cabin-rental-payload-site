'use client'

import { LatLngExpression, LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'

import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'

interface MapProps {
  posix: LatLngExpression | LatLngTuple
  zoom?: number
}

const defaults = {
  zoom: 19,
}

const iconSvg = renderToStaticMarkup(<MapPin size={50} color="var(--primary)" strokeWidth={2.5} />)

const lucideIcon = L.divIcon({
  html: iconSvg,
  className: 'lucide-marker', // optional for styling
  iconSize: [50, 50],
  iconAnchor: [25, 0],
})

const ContactMap = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={posix} draggable={false} icon={lucideIcon}>
        <Popup>Contact us</Popup>
      </Marker>
    </MapContainer>
  )
}

export default ContactMap
