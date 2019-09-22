import { fillColorArray, randomHexColor } from "./miscUtils";

export function generatePieOrBarData(data, pie) {
    let resultData = {
        labels: Object.keys(data).filter(label => label !== "label"), // filters out relevant headers
        datasets: [generateDataset(data, false)]
    };
    let resultOptions = {
        title: {
            display: true,
            text: resultData.datasets[0].label
        },
        legend: { display: pie }
    };

    return [resultData, resultOptions];
}

export function generateLineData(data) {
    let resultData = {
        labels: Object.keys(data[0]).filter(label => label !== "label"), // NB: Will only get x-values from first show
        datasets: data.map(objData => generateDataset(objData, true))
    };
    let resultOptions = {
        title: {
            display: true,
            text: resultData.datasets.length > 1 ? "Number of views" : resultData.datasets[0].label // Title changes if
                                                                                                    // more than one line is present
        },
        legend: { display: resultData.datasets.length > 1 } // Only display legend when more than one line is present
    };

    return [resultData, resultOptions];
}

function generateDataset(data, line) {
    let __data = Object.values(data);
    let dataSet = {
        data: __data,
        label: __data.pop()
    };
    if(line) {dataSet["borderColor"] = randomHexColor(); dataSet["fill"] = false;}
    else {dataSet["backgroundColor"] = fillColorArray(__data.length);}

    return dataSet;
}