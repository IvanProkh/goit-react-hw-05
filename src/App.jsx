import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//~ ------ components ------
import Navigation from './components/Navigation/Navigation';
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);

//~ ------ pages ------
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<h3 className="load">Loading...</h3>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="movie-reviews" element={<MovieReviews />} />
            <Route path="movie-cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
