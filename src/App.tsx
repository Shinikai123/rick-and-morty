import Home from "./components/Home/Home";
import CharacterList from "./components/CharacterList/CharacterList";
import LocationList from "./components/LocationList/LocationList";
import EpisodeList from "./components/EpisodeList/EpisodeList";

import {Routes, Route, BrowserRouter} from "react-router-dom";

const App = () => {

      return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/characters" element = {<CharacterList/>}/>
          <Route path="/locations" element = {<LocationList/>}/>
          <Route path="/episodes" element = {<EpisodeList/>}/>
        </Routes>
        
      
        </BrowserRouter>
        )
  
}

export default App;