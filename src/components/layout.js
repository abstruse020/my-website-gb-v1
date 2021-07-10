import * as React from 'react';
import { Link } from 'gatsby';

const NavbarMain = () => {
	return(
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
		  <div className="container-fluid">
		    <Link className="navbar-brand" to="/">Navbar</Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNavDropdown">
		      <ul className="navbar-nav">
		        <li className="nav-item">
		          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/about">About</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/">Other</Link>
		        </li>
		        <li className="nav-item dropdown">
		          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		            Dropdown link
		          </Link>
		          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		            <li><Link className="dropdown-item" to=''>Action</Link></li>
		            <li><Link className="dropdown-item" to=''>Another action</Link></li>
		            <li><Link className="dropdown-item" to=''>Something else here</Link></li>
		          </ul>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <NavbarMain/>
      <div style={{'height': '3.5rem'}}/>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout