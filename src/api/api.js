import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function trendingMovies() {
  const response = await axios.get('trending/movie/day?language=en-US', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI0NjEzZDNkNWVkODBmOTZjMTRkNDJjYjVmMDU4MCIsInN1YiI6IjY2MGZjMDhiZDg2MWFmMDE3ZGYzZDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ym5I_fcm5xY1v6sS2pKfXSeatW_yrcDCtw6whUpYk8',
    },
    params: {},
  });

  return response.data.results;
}

export async function movieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI0NjEzZDNkNWVkODBmOTZjMTRkNDJjYjVmMDU4MCIsInN1YiI6IjY2MGZjMDhiZDg2MWFmMDE3ZGYzZDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ym5I_fcm5xY1v6sS2pKfXSeatW_yrcDCtw6whUpYk8',
    },
    params: {},
  });

  return response.data;
}

export async function movieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI0NjEzZDNkNWVkODBmOTZjMTRkNDJjYjVmMDU4MCIsInN1YiI6IjY2MGZjMDhiZDg2MWFmMDE3ZGYzZDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ym5I_fcm5xY1v6sS2pKfXSeatW_yrcDCtw6whUpYk8',
    },
    params: {},
  });

  return response.data;
}

export async function getMovie(query, page) {
  const response = await axios.get('search/movie', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI0NjEzZDNkNWVkODBmOTZjMTRkNDJjYjVmMDU4MCIsInN1YiI6IjY2MGZjMDhiZDg2MWFmMDE3ZGYzZDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ym5I_fcm5xY1v6sS2pKfXSeatW_yrcDCtw6whUpYk8',
    },
    params: {
      query: query,
      page: page,
    },
  });

  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI0NjEzZDNkNWVkODBmOTZjMTRkNDJjYjVmMDU4MCIsInN1YiI6IjY2MGZjMDhiZDg2MWFmMDE3ZGYzZDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ym5I_fcm5xY1v6sS2pKfXSeatW_yrcDCtw6whUpYk8',
    },
    params: {},
  });

  return response.data;
}
