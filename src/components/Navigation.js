import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar navbar-light">
        <ul class="nav flex-column">
            <li class="nav-item">
              <Link to="/about" class="about" aria-current="page">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/projects" class="projects" aria-current="page">Projects</Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="contact" aria-current="page">Contact</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navigation;