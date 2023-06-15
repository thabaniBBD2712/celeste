import React from "react";
import "./header.css"

export default function CelesteHeader(props: { label: any; }){
    const label=props.label
    return <div className="celeste-header">{label}</div>
}