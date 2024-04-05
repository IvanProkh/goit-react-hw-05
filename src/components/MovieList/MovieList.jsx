import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map(movie => (
          <Link
            state={location}
            className={css.item}
            to={`/movies/${movie.id}`}
            key={movie.id}
          >
            {movie.poster_path === null ? (
              <div className={css.noPhoto}>
                <p className={css.noPhotoText}>No photo available</p>
              </div>
            ) : (
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              ></img>
            )}
            <p className={css.title}>{movie.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
