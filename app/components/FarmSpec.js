import React from "react";

function FarmSpec({ name, category, pay }) {
    return (
        // flex 컨테이너 안에 카드 모양으로 스펙이 나오도록.
        <div>
            <h1>{name}</h1> 
            <p>{category}</p>
            <p>{pay}</p>
        </div>
    )
}

export default FarmSpec