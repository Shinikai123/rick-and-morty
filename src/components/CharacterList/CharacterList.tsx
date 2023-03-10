import { useEffect, useState } from "react";
import Character from "./Character";
import "./CharacterList.css";
import { Link } from "react-router-dom";

const CharacterList = () => {
    
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchData(){
        const response =  await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
      }
      
      fetchData();
    }, [page])
  
    
    
const NavPage =(props) =>{
    return(
        <header className="header">
            <div  className="filter_panel">
                <p className="filter_panel_current_page">Page: {props.page}</p>
                <div className="filters">
                    <form>
                    <select className="filter_gender">
                        <option>All</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Genderless</option>
                        <option>Unknown</option>
                    </select>
                    <select className="filter_status">
                        <option>All</option>
                        <option>Alive</option>
                        <option>Dead</option>
                        <option>Unknown</option>
                    </select>
                    </form>
                    </div>
                <Link to="/"><button className="home_button">Go Home</button></Link>
            </div>
            <div className="nav_button">
                <button className="nav_button_previous" onClick={() => props.setPage(props.page - 1)}>
                    Page {props.page -1}
                </button>
                <button className="nav_button_next" onClick={() => props.setPage(props.page + 1)}>
                    Page  {props.page +1}
                </button>
            </div>
            
        </header>
    )
}


return(
<div className="character_list_container">

    <NavPage page={page} setPage={setPage}/>

    {loading ?(
        <h1>Loading</h1>
    ) : (
        
    <div className="character_list">
    {characters.map(character => {
        return (
        <div key={character.id}>
        <Character key={character.id} character={character} />
        </div>
    );
})
}
</div>

    )}
<p className="copyright">?? 2023 Innowise | Andrew Mihaylov</p>

</div>
)}

export default CharacterList;