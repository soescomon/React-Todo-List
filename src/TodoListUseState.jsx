import {useState} from "react";

export default function TextInput () {
    const [text, setText]= useState("");

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
            <div>Input text {text} </div>
        </div>
    )

}