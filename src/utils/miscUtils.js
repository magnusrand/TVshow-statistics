export function fillArray(value, len) {
    return Array.from({length: len}).map(() => value);
}

export function fillColorArray(len) {
    const randomHexColor = require('random-hex-color');
    return Array.from({length: len}).map(() => randomHexColor());
}

export const randomHexColor = require('random-hex-color');

export function changeJSONDateFormat(json) {
    return json.map((obj) => {
        let tempObj = obj;
        if(obj.seriesId !== "") {
            tempObj.date = dateToHumanFriendlyDate(obj.date);
        }
        return tempObj;
    });
}

// Accepts dates in the following format YYYYMMDD
function dateToHumanFriendlyDate(date) {
    if (date.length !== 8) return date;
    return date.substring(6) + ". " + getWrittenMonth(date.substring(4, 6)) + " " + date.substring(0,4);
}

function getWrittenMonth(month) {
    const monthNames = ["jan.", "feb.", "mar.", "apr.", "mai", "jun.",
        "jul.", "aug.", "sep.", "okt.", "nov.", "des."];
    return monthNames[parseInt(month) - 1];
}