import { getData } from '../../utils/fetch';
import { fetchCategoryFailure, fetchCategorySuccess, startFetchingCategory } from './slices';

export const fetchCategories = (page, limit) => async (dispatch) => {
  try {
    dispatch(startFetchingCategory())

    const response = await getData('/categories',{
        pageNumber: page,
        limit: limit
    });

      
    dispatch(fetchCategorySuccess(response.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
    dispatch(fetchCategoryFailure(error));
  }
};
