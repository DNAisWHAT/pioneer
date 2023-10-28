'use client';
import React, { useEffect } from 'react';

function Map() {
//   useEffect(() => {
//     const mapScript = document.createElement('script');

//     mapScript.async = true;
//     mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0f4502aca98d783bdc68b562a22b3b6c&autoload=false`;

//     document.head.appendChild(mapScript);

//     const onLoadKakaoMap = () => {
//       window.kakao.maps.load(() => {
//         const mapContainer = document.getElementById('map');
//         const mapOption = {
//           center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//           level: 3, // 지도의 확대 레벨
//         };
//         new window.kakao.maps.Map(mapContainer, mapOption);
//       });
//     };
//     mapScript.addEventListener('load', onLoadKakaoMap);
//   }, []);
useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0f4502aca98d783bdc68b562a22b3b6c&autoload=false`;
    document.head.appendChild(kakaoMapScript);
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map')
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        }
  
        var map = new window.kakao.maps.Map(container, options)
      })
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, []);

  return (
    <div>
      <div id="map" className="w-96 h-96"></div>
    </div>
  );
}

export default Map;