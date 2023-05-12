import { useState } from "react";
import "./App.css";
import Frage from "./comp/Frage.jsx";
import PlayerList from "./comp/PlayerList.jsx";
import "./CSS/Styles.css";

function App() {
     const [currentPlayer, setCurrentPlayer] = useState(0);
    
   
     return (
       <>
         <div className="wholeWrapper">
           <PlayerList currentPlayer={currentPlayer}></PlayerList>
   
           <Frage
             currentPlayer={currentPlayer}
             setCurrentPlayer={setCurrentPlayer}
           ></Frage>
         </div>
       </>
     );
   }
   
   export default App;
