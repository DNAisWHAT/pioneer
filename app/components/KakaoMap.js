'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Script from 'next/script';
import { Map,CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { IconButton, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useKakaoLoader } from 'react-kakao-maps-sdk';
import FarmSpec from './FarmSpec';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0f4502aca98d783bdc68b562a22b3b6c&autoload=false`;

export const mapInfo = [
     
            {
            "lat" : 35.823571, 
            "lng" : 126.915493,
            "name": "(주)농업회사법인 농산",
            "category" : "경영체",
            "pay" : "월급 : 120만 원",
            "id" : 1,
            },
            {
            "lat" :  35.88834309981449,
            "lng" : 127.26758010337736,
            "name": "드림뜰힐링팜",
            "category": "경영체",
            "pay": "월급 : 70만 원" 
           },
           {
            "lat": 35.825223030669164, 
            "lng": 126.91747104625861,
            "name": "준현영농조합법인",
            "category": "경영체",
            "pay": "월급 : 70만 원",
           },
           {
            "lat": 37.153565132080836, 
            "lng": 127.58371480589892,
            "name": "아시아종묘생명공학육종연구소",
            "category": "경영체",
            "pay": "월급 : ???",
           },
           {
            "lat": 35.829093, 
            "lng": 126.771108,
            "name": "베리라이스(주)",
            "category": "경영체",
            "pay": "월급 : ???",
           },{
            "lat": 35.8455685, 
            "lng": 127.010427,
            "name": "오색오감",
            "category": "경영체",
            "pay": "월급 : 70만 원",
           },
           {
           "lat": 35.8576800, 
           "lng": 127.651601,
           "name": "무주원",
           "category": "경영체",
           "pay": "월급 : 120만 원",
          },
          
    
  ]




const KakaoMap = () => {

// const [loading, error] = useKakaoLoader({
//     appkey: "0f4502aca98d783bdc68b562a22b3b6c",
//     libraries: ["services", "clusterer", "drawing"],
// })

const [ mapLocation , setMapLocation ] = useState({"lat": 36.2683, "lng": 127.6358})
const [ mapDepth, setMapDepth ] = useState(14);
const [mapDescription, setMapDescription] = useState([])
const [id, setId] = useState(null);
const clickRef = useRef(null);

useEffect(()=>{
  setMapLocation(value => value);
  setMapDepth(value => value);
}, [])

console.log(` mapLocation lat: ${mapLocation.lat} mapLocation lng : ${mapLocation.lng}`);
console.log(`mapDepth : ${mapDepth}`)

const onClickToggleButton = (location) => {
  setMapLocation({"lat": location.lat, "lng": location.lng});
  setMapDepth(6);
}


const onButtonClick = (farmDescription) => {
  setMapDescription(farmDescription)
  setId(farmDescription.id)
}


  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ "lat": mapLocation.lat, "lng": mapLocation.lng }} style={{ width: '50%', height: '50%' }} level={mapDepth}>
      {
      mapInfo.map((information, idx) => (<CustomOverlayMap position={{"lat": information.lat, "lng": information.lng}}
      key={idx}>
        <div>
          <MapMarker position={{"lat": information.lat, "lng": information.lng}} onClick={() => onClickToggleButton({"lat": information.lat, "lng": information.lng})}/>
          <Button onClick={()=>(onButtonClick({"name": information.name, "category": information.category, "pay": information.pay, "id": information.id}))}>
        {information.name}
          </Button>
        </div>
        
        {/* <IconButton >
          <i className='fas fa-heart' />
        </IconButton> */}
      </CustomOverlayMap>))
      }
      <div >
      <FarmSpec name={mapDescription.name} category={mapDescription.category} pay={mapDescription.pay} id={mapDescription.id} />
      <a href={`/farms/${mapDescription.name}`}>
        { mapDescription.name !== undefined ?
        <Button>
          {`${mapDescription.name} 더 알아보기`}
        </Button> : null
        }
        
      </a>
      {/* {
        mapInfo.map((information, idx) => {
          (<FarmSpec name={information.name} category={information.category} pay={information.pay} key={idx} />)
          console.log(`name: ${information.name} category: ${information.category} pay: ${information.pay} `)
        })
      } */}
      </div>
      </Map>
      
    </>
  );
};

export default KakaoMap;