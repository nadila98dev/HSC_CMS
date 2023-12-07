import { getData } from "../../utils/fetch";
import {startFethcItems, fetchItemsSuccess, fetchItemsFailure} from './slices'


// Assuming getData is a function that returns a promise
// You might want to add a loading indicator in your Redux state
// to track whether data fetching is in progress.

export const fetchItems = (page, limit, keyword) => async (dispatch) => {
    try {
        dispatch(startFethcItems());

        const response = await getData('/items', {
            pageNumber: page,
            limit: limit,
            keyword: keyword
        });

        dispatch(fetchItemsSuccess(response.data));
    } catch (err) {
        console.error('Error fetching items:', err);
        dispatch(fetchItemsFailure(err));
    }
};
