import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          repofinder<span className="blink">_</span>
        </li>
        <li>
          <form action="" method="post">
            <input placeholder="Search repos..." type="text" />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
