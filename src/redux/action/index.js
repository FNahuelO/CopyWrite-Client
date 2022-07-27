import { baseUrl } from "../../config/axios";
export const REVERSE_TEXT = 'REVERSE_TEXT';

export const reverseText = (text) => {
    return dispatch => {
        baseUrl.get(`text?text=${text}`)
        .then(({ data })=> dispatch({ type: REVERSE_TEXT, payload: data}))
    }
}