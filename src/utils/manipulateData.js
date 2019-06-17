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

export function viewsForOneShow(json) {
    // Needs to extract which show it's calculating for (this will be label),
    // get an array with the dates it has aired (this will be labels) and
    // get number of views for that airing day (this will be data)
}