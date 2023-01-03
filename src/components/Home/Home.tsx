import "./Home.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <div className="nav_bar">
      <div className="characters_section">
      <Link to="/characters"><button className="characters_section_button">Characters</button></Link>
      </div>
      <div className="locations_section">
      <Link to="/locations"><button className="locations_section_button">Locations</button></Link>
      </div>
      <div className="episodes_section">
      <Link to="/episodes"><button className="episodes_section_button">Episodes</button></Link>
      </div>
    </div>
  )
}

const Home = () => {
    return (
        <div className="home_container">
            <div className="home_header">
                <p className="header_title">Rick and Morty</p>

            </div>
          <NavBar/>
          <p className="copyright">© 2023 Innowise | Andrew Mihaylov</p>
        </div>
    )
}

export default Home;