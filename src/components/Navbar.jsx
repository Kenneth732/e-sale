import React from 'react'
import { Link } from 'react-router-dom'
import './Nvabar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='sidebar'>
                <li>
                    <Link to="">
                        <a href="">Home</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">About</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Service</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Team</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Contact Us</a>
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="">
                        <a href="">Home</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">About</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Service</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Team</a>
                    </Link>
                </li>

                <li>
                    <Link to="">
                        <a href="">Contact Us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar