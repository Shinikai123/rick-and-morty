import { useEffect, useState } from "react";
import Episode from "./Episode";
import { Link } from "react-router-dom";
import "./EpisodeList.css";

const NavPage = (props) =>{
    return(
        <header className="header">
            <div  className="filter_panel">
                <p className="filter_panel_current_page">Page: {props.page}</p>
                <div className="filters">
                    <form>
                    <select className="filter_year">
                        <option>All</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
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

const EpisodeList = () => {
    
    

    const [episodes, setEpisodes] =useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchData(){
        const response =  await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setEpisodes(data.results);
      }
      
      fetchData();
    }, [page])
    

return(
<div className="episode_list_container">

    <NavPage page={page} setPage={setPage}/>

    {loading ?(
        <h1>Loading</h1>
    ) : (
        
    <div className="episode_list">
    {episodes.map(episode => {
        return (
        <div key={episode.id}>
        <Episode key={episode.id} episode={episode} />
        </div>
    );
})
}
</div>

    )}
<p className="copyright">© 2023 Innowise | Andrew Mihaylov</p>

</div>
)}

export default EpisodeList;