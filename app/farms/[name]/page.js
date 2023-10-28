'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
const Name = () => {
    const [ [imgSrc, imgDes], setImgSrc ] = useState(["/defaultImage.png", "default image description."])
    const router = useRouter();
    const query  = router.query;
    console.log(`query : ${query}`)
    return (
        <div className="flex">
            <div className="">
                <div>
                {/* 제목 및 정보 들어갈 곳 */}
                </div>
                <div>
                {/* 사진 들어갈 곳 */}
                <Carousel className="round-xl">
                    <Image src={imgSrc} width={650} height={650} alt={imgDes}/>
                </Carousel>
                </div>
            </div>
            <div>
                <div>
                {/* 후기 들어갈 곳 */}
                </div>
            </div>
            {/* this place domain is :/farms/name/[name] */}
        </div>
    )
}

export default Name;