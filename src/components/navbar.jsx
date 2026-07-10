import { Link } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

function Navbar() {
  const { authenticated, ready, login, logout } = usePrivy();
  // if (!ready) {
  //   return <div class = "message">Loading...</div>; // or a loading spinner, etc.
  // }
  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="brand-mark">A</span>
        <div>
          <div className="brand-title">AI Writing Assistant</div>
          <div className="brand-subtitle">
            Draft, refine, and polish in one place
          </div>
        </div>
      </div>

      <nav className="nav-links" aria-label="Primary">
        <Link className={navLinkClass} to="/">
          Home
        </Link>
        <Link className={navLinkClass} to="/about">
          About
        </Link>
      </nav>

      <div className="nav-actions">
        {authenticated ? (
          <>
          <Link to="/editor">Write</Link>
            <button
              type="button"
              className="pill-button primary"
              onClick={logout}
            >
              Logout
            </button>
            
            
          </>
        ) : (
          <>
            <button type="button" className="pill-button" onClick={login}>
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
