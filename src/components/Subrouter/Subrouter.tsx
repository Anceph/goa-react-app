import React, { FC, ReactNode } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import './Subrouter.css';

export type Subroute = {
  name: string;
  id: string;
};

export type Props = JSX.IntrinsicElements['div'] & {
  routes: Array<Subroute>;
  subcomponent: ReactNode;
};

const Subrouter: FC<Props> = ({ className, style, routes, subcomponent }) => {
  const { url, path } = useRouteMatch();

  const baseStyle = 'subrouter';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return (
    <div className={classNames} style={style}>
      <ul>
        {routes.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:subId`}>{subcomponent}</Route>
    </div>
  );
};

export default Subrouter;
