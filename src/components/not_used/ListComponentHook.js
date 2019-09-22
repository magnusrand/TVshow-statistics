import React, {useState, useEffect} from 'react';
import axios from "axios";
import convertToJSON from "../../utils/csvConverter";

export default function ListHook(props) {
    let listData = () => {
        return (
            <ul>
                {props.data.map((line, index) => {
                    return <li key={index}> {line.date + ", " + line.seriesId} </li>
                })}
            </ul>
        )
    };

    return(
        <div>
            {!props.loading ? (listData()): (<p> Loading … </p>)}
        </div>
    )
}