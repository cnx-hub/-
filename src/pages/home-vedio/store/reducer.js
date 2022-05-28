import { CHANGE_HOMEVEDIO, CHANGE_HASMORE } from "./constant"

const defaultState = {
    topMVs: [],
    hasMore: false
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_HOMEVEDIO:
            return { ...state, topMVs: action.topMVs }
        case CHANGE_HASMORE:
            return { ...state, hasMore: action.hasMore }
        default:
            return state
    }
}