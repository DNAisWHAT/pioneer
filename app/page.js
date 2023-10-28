import React from 'react';
import Modals from './\bcomponents/Modals';
import Map from './\bcomponents/Map';
import { NextPage } from 'next';
import KakaoMap from './components/KakaoMap';
export default function Home() {
  // const [title, setTitle] = useState('Test');
  return (
    <div>
<div className='flex absolute  w-screen h-screen left-0'>
  
        {/* <Map className="justify-items-center"/> */}
        {/* <main className="absolute w-screen   h-screen left-0 top-0"> */}
        <KakaoMap className="justify-center"/>
        {/* </main> */}
        {/* <Modals title="안녕하세요" content="하이하이"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
        <Modals title="pioneer입니다." content="파이오니어"/>    
         */}
      </div>
    </div>
      
  )
}
