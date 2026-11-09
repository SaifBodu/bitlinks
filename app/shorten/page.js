"use client"
import React from "react";
import { useState } from "react";


const shorten = () => {
    const[url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const handleChange= ()=>{ }
    return (
        <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg">
            <h1 className="font-bold text-2xl text-black">Generate your short URLs</h1>
            <div className="flex flex-col gap-3">
                <input className= "p-4 my-2 focus:outline-purple-600 rounded-md text-black" type="text" placeholder="Enter your URL"
                value={url}
                onChange={e=>{seturl(e.target.value)}}
                />
                <input className="p-4 my-2 focus:outline-purple-600  rounded-md  text-black" type="text" placeholder="Enter prefered short URL text"
                value={shorturl}
                onChange={e=>{setshorturl(e.target.value)}}
                />
                <button className="p-24 my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">Generate</button>
            </div>
        </div>
    )
}
export default shorten