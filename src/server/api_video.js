import request from "./index";

export function getTopMV(offset, area = '', limit = 10) {
    return request.get("/top/mv", {
        offset,
        area,
        limit
    })
}
// mv的详情信息 但是mv的地址不能拿到
export function getMVDetail(mvid) {
    return request.get('/mv/detail', {
        mvid
    })
}

export function getMVURL(id, r = 1080) {
    return request.get('/mv/url', {
        id, r
    })
}

export function getRelativeVideo(id) {
    return request.get('/related/allvideo', {
        id
    })
}