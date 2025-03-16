import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/html">HTML</Link>
      <Link to="/css">CSS</Link>
      <Link to="/javascript">JavaScript</Link>
      <Link to="/react">React</Link>
      <Link to="/sanity">Sanity</Link>
    </nav>
  );
}

export default Nav;
