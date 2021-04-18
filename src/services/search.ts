import type { Movie } from '../types';
import api from './api';

interface ApiErrorResponse {
  response: 'False';
  error: string;
}

interface ApiSucessResponse {
  response: 'True';
  search: Movie[];
  totalResults: string;
}

type ApiResponse = ApiErrorResponse | ApiSucessResponse;

interface SearchServiceError {
  status: 'error';
  data: {
    error: { status: number; message: string };
  };
}

interface SearchServicesSucess {
  status: 'success';
  data: { movies: Movie[]; totalCount: number };
}

export const searchMovie = async (
  searchTerm: string,
  page = 1
): Promise<SearchServiceError | SearchServicesSucess> => {
  try {
    const response = await api.get<ApiResponse>('/', {
      params: { type: 'movie', s: searchTerm, page },
    });

    if (response.data.response == 'False') {
      // Since the API does not use the HTTP status 404 code to indicate
      // that the resource is not found. It's necessary to set the empty
      // array as a searching result.
      const status = response.data.error == 'Movie not found!' ? 404 : 400;
      return {
        status: 'error',
        data: {
          error: { status, message: response.data.error },
        },
      };
    }

    const movies = response.data.search;
    const totalCount = parseInt(response.data.totalResults);
    return { status: 'success', data: { movies, totalCount } };
  } catch (error) {
    return {
      status: 'error',
      data: {
        error: { status: error.status, message: error.message },
      },
    };
  }
};
