import { CHANGE_DANMULIST, CHANGE_MVDETAIL, CHANGE_MVURLINFO, CHANGE_RELATEDVIDEOS } from "./constant"
const defaultState = {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: [],
    // 弹幕信息
    danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
    }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }]
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_DANMULIST:
            return { ...state, danmuList: action.danmuList }
        case CHANGE_MVDETAIL:
            return { ...state, mvDetail: action.mvDetail };
        case CHANGE_MVURLINFO:
            return { ...state, mvURLInfo: action.mvURLInfo }
        case CHANGE_RELATEDVIDEOS:
            return { ...state, relatedVideos: action.relatedVideos }
        default:
            return state
    }
}
