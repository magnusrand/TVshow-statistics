export function viewsPerShow(json) {
    let data = json.reduce((res, obj) => {
        if(obj.seriesId === "") return res;
        if(!(obj.seriesId in res))
            res[obj.seriesId] = parseInt(obj.views);
        else {
            res[obj.seriesId] += parseInt(obj.views);
        }
        return res;
    }, {});
    data["label"] = "Views per show";
    return data;
}

export function numberOfEpisodes(json) {
    let data = json.reduce((res, obj) => {
        if(obj.seriesId === "") return res;
        if(!(obj.seriesId in res))
            res[obj.seriesId] = 1;
        else {
            res[obj.seriesId] += 1;
        }
        return res;
    }, {});
    data["label"] = "Number of episodes";
    return data;
}

export function viewsForOneShow(json, name) {
    let dataShow = json.filter(obj => obj.seriesId === name)
        .reduce((res, obj) => {
        if(!(obj.date in res))
            res[obj.date] = parseInt(obj.views);
        else {
            res[obj.date] += parseInt((obj.views));
        }
        return res;
    }, {});
    dataShow["label"] = name;

    return [dataShow];
}

export function viewsForAllShows(json) {
    return [...new Set(json.map(obj => obj.seriesId))] // extracts show names
        .filter(obj => obj !== "")
        .map(name => viewsForOneShow(json, name)[0]); // generates data for show in question
}