import { getData } from "../../utils/fetch";
import {startFethcItems, fetchItemsSuccess, fetchItemsFailure} from './slices'


export const fetchItems = (page, limit, keyword) => async (dispatch) => {
    try {
        dispatch(startFethcItems())

        const response = await getData('/items', {
            pageNumber: page,
            limit: limit,
            keyword: keyword
        })

        dispatch(fetchItemsSuccess(response.data))
        
    } catch (err) {
        console.error('Error fetching items:', err)
        dispatch(fetchItemsFailure(err))
    }
}