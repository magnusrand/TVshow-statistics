import React from 'react';
import axios from "axios";
import convertToJSON from "../../utils/csvConverter";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            loading: true
        }
    }

    componentDidMount() {
        axios.get('data/data.csv').then(res => res.data).then(data => {
            let jsonString = convertToJSON(data);
            let json = JSON.parse(jsonString);
            this.setState({
                data: json,
                loading: false
            })
        })
    }

    listData = () => {
        return (
            <ul>
                {this.state.data.map(line => {
                    return <li> {line.date + ", " + line.seriesId} </li>
                })}
            </ul>
        )
    };

    render() {
        let content = <p> Loading … </p>;
        if(!this.state.loading){
            content = this.listData()
        }
        return(
            <div>
                {content}
            </div>
        )
    }

}