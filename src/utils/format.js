
export function formatCount(count) {
    count = parseInt(count)
    //  console.log(count);
    if (count > 100000000) {
        return (count / 100000000).toFixed(1) + '亿'
    } else if (count > 10000) {
        return (count / 10000).toFixed(1) + '万'
    } else {
        return count + ''
    }
}

function padLeftZero(time) {
    time = time + ''
    return ("00" + time).slice(time.length)
}

export function formatDuration(duration) {
    duration = duration / 1000;
    let s = Math.floor(duration % 60);
    let m = Math.floor(duration / 60)

    return padLeftZero(m) + ':' + padLeftZero(s)
}