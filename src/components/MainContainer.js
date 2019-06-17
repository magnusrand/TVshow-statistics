import React, {useState, useEffect} from 'react';
import { Pie, HorizontalBar } from 'react-chartjs-2';
import axios from "axios";
import convertToJSON from "../utils/csvConverter";
import { viewsPerShow, numberOfEpisodes } from "../utils/manipulateData";
import { generatePieOrBarData } from "../utils/generateGraphData";

export default function MainContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // Fetch data from csv-file
        axios.get('data/data.csv').then(res => res.data)
            .then(data => {
                let jsonString = convertToJSON(data);
                return JSON.parse(jsonString);
            })
            .then(json => {
                setData(json);
                setLoading(false);
            }).catch(console.error);
    }, []);

    let content = (<p> Please wait </p>);

    if(!loading){
        let pieData = generatePieOrBarData(viewsPerShow(data), true);
        let BarData = generatePieOrBarData(numberOfEpisodes(data), false);
        content = (
            <div>
                <HorizontalBar data={BarData[0]} options={BarData[1]}/>
                <Pie data={pieData[0]} options={pieData[1]}/>
            </div>
        )
    }
    // <ListHook data={data} loading={loading}/>

    return (
        <div>
            {content}
        </div>
    )
}