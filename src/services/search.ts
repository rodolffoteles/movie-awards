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
  error: { code?: number; message: string };
}

interface SearchServicesSucess {
  status: 'success';
  data: { movies: Movie[]; totalCount: number };
}

export const fetchMovies = async (
  searchTerm: string,
  page = 1
): Promise<SearchServiceError | SearchServicesSucess> => {
  try {
    const response = await api.get<ApiResponse>('/', {
      params: { type: 'movie', s: searchTerm, page },
    });

    if (response.data.response == 'False') {
      return {
        status: 'error',
        error: {
          code: getStatusCode(response.data.error),
          message: response.data.error,
        },
      };
    }

    const movies = response.data.search;
    const totalCount = parseInt(response.data.totalResults);
    return { status: 'success', data: { movies, totalCount } };
  } catch (error) {
    return {
      status: 'error',
      error: { code: error.status, message: error.message },
    };
  }
};

/**
 * Map OMDB api error message to a HTTP status code
 *
 * @param {string} message - Error message
 * @returns {number}
 */
function getStatusCode(message: string) {
  switch (message) {
    case 'Movie not found!':
      return 404;
    case 'Too many results.':
      return 413;
    default:
      return 400;
  }
}
