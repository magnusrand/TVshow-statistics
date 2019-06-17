import React, {useState, useEffect} from 'react';
import axios from "axios";
import convertToJSON from "../../utils/csvConverter";

export default function ListHook() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('data/data.csv').then(res => res.data)
            .then(data => {
                let jsonString = convertToJSON(data);
                let json = JSON.parse(jsonString);
                return json})
            .then(json => {
                setData(json);
                setLoading(false);
            }).catch(console.error);
    }, []);

    let listData = () => {
        return (
            <ul>
                {data.map((line, index) => {
                    return <li key={line.id}> {line.date + ", " + line.seriesId} </li>
                })}
            </ul>
        )
    };

    let content = <p> Loading … </p>;
    if(!loading){
        content = listData()
    }
    return(
        <div>
            {content}
        </div>
    )
}