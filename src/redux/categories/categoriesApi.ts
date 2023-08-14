import { apiSlice } from '../api/apiSlice';

export const categoriesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//get all  category
		getAllCategory: builder.query<any, void>({
			query: () => ({
				url: `/product`,
				method: 'POST',
			}),
		}),
		getSinglePost: builder.query<any, any>({
			query: (id) => ({
				url: `/product/${id}`,
				method: 'POST',
			}),
		}),

	}),
});

export const {
	useGetAllCategoryQuery,
	useGetSinglePostQuery,
} = categoriesApi;
