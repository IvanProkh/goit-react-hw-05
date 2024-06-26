import MovieList from '../../components/MovieList/MovieList';
import { trendingMovies } from '../../api/api';
import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div className={css.component}>
      <h1 className={css.title}>
        <span className={css.titleSpan}>20</span>
        Most Popular Movies Right Now
      </h1>
      {loading && <h3 className={css.load}>Loading...</h3>}
      <MovieList movies={movies}></MovieList>
      {error && <NotFoundPage></NotFoundPage>}
    </div>
  );
}
