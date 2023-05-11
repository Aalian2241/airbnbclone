import React, { useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { rental_items } from '../../airbnbLocaitons';
import getCenter from "geolib/es/getCenter";


const MapComponent = () => {
  // TRANSFORMING OBJECTs
  const coordinates = rental_items.map(result => ({
    longitude:result.longitude,
    latitude:result.latitude
  }))
  const center = getCenter(coordinates)
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [viewport, setViewport] = useState({
    
    latitude:31.55220809512996,
    longitude: 74.30289745330812,
    zoom:12
  })


  return (
    <div className='bg-gray-400 inline-flex w-[100vw] h-[100vh]  fixed'>
        <div className='w-full'>
          <Map 
              reuseMaps
              // width="100%"
              // height="100%"
              doubleClickZoom
              scrollZoom
              {...viewport}
              onDrag={(nextViewPort)=>setViewport(nextViewPort)}
              mapStyle='mapbox://styles/aalian-41/clhiuswi301k101p60kud4hk9'
              mapboxAccessToken='pk.eyJ1IjoiYWFsaWFuLTQxIiwiYSI6ImNsaGl1bXI1aDBibzczZG51ZXRxMmJwaWUifQ.sjF1EXaSgrH2UBhSPhmSAg'
              >
            {rental_items.map(result =>(
        
  
                <Marker
                  style={{position:'absolute', top:'0', left:'0'}}
                  longitude={result.longitude}
                  latitude={result.latitude}
                  anchor="center"
                >

                  <p className='cursor-pointer text-2xl'>📌</p>
                </Marker>

            ))}

          </Map>
        </div>
        
    </div>
  )
}

export default MapComponent