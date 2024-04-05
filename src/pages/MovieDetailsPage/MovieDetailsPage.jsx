import { useEffect, useRef, useState } from 'react';
import { movieDetails } from '../../api/api';
import { HiArrowSmLeft } from 'react-icons/hi';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetail() {
      try {
        setLoading(true);
        const data = await movieDetails(movieId);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetail();
  }, [movieId]);

  const location = useLocation();

  const currentLocation = useRef(location.state ?? '/');

  // console.log(currentLocation);

  if (!movieDetail) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className={css.container}>
      <Link className={css.goBack} to={currentLocation.current}>
        <HiArrowSmLeft /> Go back!
      </Link>
      <div className={css.section}>
        {loading && <h3 className={css.load}>Loading...</h3>}

        {movieDetail.backdrop_path === null ? (
          <div className={css.noPhoto}>
            <p className={css.noPhotoText}>No photo available</p>
          </div>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            className={css.img}
          />
        )}

        <div>
          <div className={css.title}>
            <h3 className={css.titleName}>{movieDetail.title}</h3>
            <p className={css.date}>({movieDetail.release_date.slice(0, 4)})</p>
          </div>
          {movieDetail.tagline !== '' && (
            <p className={css.tagline}>{movieDetail.tagline}</p>
          )}
          <h4 className={css.genres}>Genres</h4>
          <ul className={css.genresList}>
            {movieDetail.genres.map(genre => {
              return (
                <li className={css.genre} key={genre.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {movieDetail.overview !== '' && (
        <div>
          <h2 className={css.overviewTittle}>Overview</h2>
          <p className={css.overview}>{movieDetail.overview}</p>
        </div>
      )}

      <div>
        <div className={css.navLinks}>
          <NavLink className={css.linkTo} to="movie-reviews">
            Rewiews
          </NavLink>

          <NavLink className={css.linkTo} to="movie-cast">
            Movie cast
          </NavLink>
        </div>
        <Outlet className={css.outlet}></Outlet>
      </div>
    </div>
  );
}
