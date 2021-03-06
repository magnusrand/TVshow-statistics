export default function convertToJSON(csv) {
    let lines = csv.split('\n');
    let result = [];
    let headers = lines[0].split(',');

    for(let i = 1; i < lines.length; i++) { // Iterates through all lines in file
        let curObj = {};
        let curLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) { // The current object gets data from file
            curObj[headers[j]] = curLine[j];
        }
        result.push(curObj);
    }
    return JSON.stringify(result);
}