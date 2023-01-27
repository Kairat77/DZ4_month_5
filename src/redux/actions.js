import {types} from "./types";

export function plusChange(value) {
    return {
        type: types.PLUS,
        payload: value
    }
}

export function minusChange(value){
    return {
        type: types.MINUS,
        payload: value
    }
}

export function umnChange(value){
    return {
        type: types.UMN,
        payload: value
    }
}

export function delChange(value){
    return {
        type: types.DEL,
        payload: value
    }
}