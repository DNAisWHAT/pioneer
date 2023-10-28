'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Input, Button } from "@material-tailwind/react";

function Modals({title, content}) {

    const [animation, setAnimation] = useState("");

    const onTagged = e => {
        e.target.parentElement
    }

    const onAnimationChanged = () => {
        
    }

    return (
        <div className="flex p-6 mx-4 ">
            <div className=" mx-10">
                <h1 className="font-bold from-slate-50">{title}</h1>
                <p>{content}</p>
            </div>
            <Button className="ml-auto" onMouseOver={onTagged}>체크</Button>
        </div>
    )
}

export default Modals;