import { fillColorArray, randomHexColor } from "./miscUtils";

export function generatePieOrBarData(data, pie) {
    let resultData = {
        labels: Object.keys(data).filter(label => label !== "label"),
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
        labels: Object.keys(data).filter(label => label !== "label"),
        datasets: [generateDataset(data, true)]
    };
    let resultOptions = {
        title: {
            display: true,
            text: resultData.datasets[0].label
        }
    };

    return [resultData, resultOptions];
}

export function generateDataset(data, line) {
    let __data = Object.values(data);
    let dataSet = {
        data: __data,
        backgroundColor: fillColorArray(__data.length),
        label: __data.pop()
    };
    if(line) {dataSet["borderColor"] = randomHexColor(); dataSet["fill"] = false;}

    return dataSet;
}