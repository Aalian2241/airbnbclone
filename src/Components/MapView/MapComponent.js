import React, { useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { rental_items } from '../../airbnbLocaitons';
import getCenter from "geolib/es/getCenter";
import 'mapbox-gl/dist/mapbox-gl.css';


const MapComponent = () => {
  // TRANSFORMING OBJECTs
  const coordinates = rental_items.map(result => ({
    longitude:result.longitude,
    latitude:result.latitude
  }))
  const center = getCenter(coordinates)
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [viewport, setViewport] = useState({
    
    latitude:center.latitude,
    longitude: center.longitude,
    zoom:9
  })
  var currentZoom = viewport.zoom;


  function decreaseZoom(){
    currentZoom -=1;
    setViewport({...viewport, zoom:currentZoom});
  }

  function increaseZoom(){
    currentZoom+=1;
    console.log(viewport.zoom)
    setViewport({...viewport, zoom:currentZoom})
  }

  return (
    <div className='bg-gray-400 inline-flex w-[100vw] h-[100vh]   fixed'>
        <div className='w-full'>
          <Map 
              reuseMaps
              // width="100%"
              // height="100%"
              doubleClickZoom
              scrollZoom
              {...viewport}
              onDrag={(nextViewPort)=>{
                console.log(nextViewPort)
                setViewport({...nextViewPort, zoom:currentZoom})
                console.log("now: "+ viewport.zoom)
              }
                
              }
              mapStyle='mapbox://styles/aalian-41/clhiuswi301k101p60kud4hk9'
              mapboxAccessToken='pk.eyJ1IjoiYWFsaWFuLTQxIiwiYSI6ImNsaGl1bXI1aDBibzczZG51ZXRxMmJwaWUifQ.sjF1EXaSgrH2UBhSPhmSAg'
              >
            {rental_items.map(result =>(
        
              <div key={result.longitude}>

              
                <Marker
                  style={{position:'absolute', top:'0', left:'0'}}
                  longitude={result.longitude}
                  latitude={result.latitude}
                  anchor="center"
                >

                  <p aria-label='push-pin' className='cursor-pointer text-2xl'>📌</p>
                </Marker>

                
                </div>
            ))}

          </Map>
          
        </div>
        <div className='absolute flex flex-col'>
          <button 
            onClick={()=>decreaseZoom()}
            className=' bg-black text-white p-[0.8rem] my-[1rem] rounded-2xl px-[1rem]'>-</button>
          <button 
            onClick={()=>increaseZoom()}
            className=' bg-black text-white p-[0.8rem] rounded-2xl px-[1rem]'>+</button>
        </div>
        
    </div>
  )
}

export default MapComponent