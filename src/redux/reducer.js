import {types} from "./types";

const initialState = {
    result: null
}

export default function reducer(state = initialState, action){
    if (action.type === types.PLUS){
        return {result: action.payload}
    }
    if (action.type === types.MINUS){
        return {result: action.payload}
    }
    if (action.type === types.UMN){
        return {result: action.payload}
    }
    if (action.type === types.DEL){
        return {result: action.payload}
    }
    return state
}