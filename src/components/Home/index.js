import React, {useState} from 'react'
import bg from "./bg.png";

const background = require("./bg.png")

function Home() {
    const [query, setQuery] = useState('');
    const search = async (e) => {
        if(e.key === 'Enter') {
            setQuery('');
        }
    }

    return (
        <>
        <img src={'./bg.png'} />
        <div className="main-container" style={{ 
            backgroundImage: bg 
      }}>

            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>

        </div>
        </>
    );
}

export default Home
