import { useEffect, useState } from "react";
import Location from "./Location";
import "./LocationList.css";
import { Link } from "react-router-dom";

const NavPage =(props) =>{
    return(
        <header className="header">
            <div>
                <p className="header_current_page">Page: {props.page}</p>
            </div>
            <Link to="/"><button className="home_button">Go Home</button></Link>
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

const LocationList = () => {
    
    

    const [locations, setLocations] =useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchData(){
        const response =  await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setLocations(data.results);
      }
      
      fetchData();
    }, [page])
    

return(
<div className="container">

    <NavPage page={page} setPage={setPage}/>

    {loading ?(
        <h1>Loading</h1>
    ) : (
        
    <div className="location_list">
    {locations.map(location => {
        return (
        <div key={location.id}>
        <Location key={location.id} location={location} />
        </div>
    );
})
}
</div>

    )}

</div>
)}

export default LocationList;