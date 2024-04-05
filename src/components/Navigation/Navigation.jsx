import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { BiSolidCameraMovie } from 'react-icons/bi';

export default function Navigation() {
  const activLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.header}>
      <h1 className={css.title}>
        Filmopolis
        <BiSolidCameraMovie className={css.icon} />
      </h1>
      <div className={css.list}>
        <NavLink className={activLink} to="/">
          HOME
        </NavLink>
        <NavLink className={activLink} to="/movies">
          MOVIES
        </NavLink>
      </div>
    </div>
  );
}
