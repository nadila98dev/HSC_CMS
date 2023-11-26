import { getData } from '../../utils/fetch';
import { fetchCategoryFailure, fetchCategorySuccess, startFetchingCategory } from './slices';

export const fetchCategories = (page, limit, keyword) => async (dispatch) => {
  try {
    dispatch(startFetchingCategory())

    const response = await getData('/categories',{
        pageNumber: page,
        limit: limit,
        keyword: keyword
    });

      
    dispatch(fetchCategorySuccess(response.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
    dispatch(fetchCategoryFailure(error));
  }
};
