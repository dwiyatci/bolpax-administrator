/**
 * Created by glenn on 16/02/16.
 */

import React from 'react'
import { Link } from 'react-router'

const NavLink = (props) => (
  <Link {...props} className="nav-link" activeClassName="active"/>
);

export { NavLink as default, NavLink };
