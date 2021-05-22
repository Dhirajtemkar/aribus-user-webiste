import React, {useState} from 'react'
import Left from './left'
import Right from './right'
import "./styles.css"

const dummyIdeas = [
    {
        votes: 10,
        title: "Airbus title 1 update",
        description: "Airbus is a good company pls hire us we are really very smart and can do a lot of things. Airbus is a good company pls hire us we are really very smart and can do a lot of things. Airbus is a good company pls hire us we are really very smart and can do a lot of things.",
        sender: "dhiraj@gmail.com",
    },
    {
        votes: 5,
        title: "Hydrogen, An important pathway to our zero-emission ambition",
        description: "At Airbus, we believe hydrogen is one of the most promising zero-emission technologies to reduce aviation’s climate impact. This is why we consider hydrogen to be an important technology pathway to achieve our ambition of bringing a zero-emission commercial aircraft to market by 2035.",
        sender: "sheetal@gmail.com",
    },
    {
        votes: 8,
        title: "Zero Emission",
        description: "Today, zero-emission flight is closer to reality than ever. At Airbus, we are committed to developing, building and testing alternative-propulsion systems – powered by electric, hydrogen and/or solar technology – to enable the aviation industry to disruptively reduce the CO2 emissions of commercial aircraft, helicopters, satellites and future urban air mobility vehicles.",
        sender: "dhiraj@gmail.com",
    },
    {
        votes: 4,
        title: "Future concepts, A fresh approach to aircraft design & materials",
        description: "Today, the aerospace industry faces the colossal challenge of how to make aircraft and other aerial vehicles more sustainable. At Airbus, we are shattering pre-conceived notions of what is possible in aerospace by testing future aircraft designs and by developing lightweight, high-performance materials.",
        sender: "sheetal@gmail.com",
    },
    {
        votes: 2,
        title: "Airbus title 1 update",
        description: "Airbus is a good company pls hire us we are really very smart and can do a lot of things. Airbus is a good company pls hire us we are really very smart and can do a lot of things. Airbus is a good company pls hire us we are really very smart and can do a lot of things.",
        sender: "dhiraj@gmail.com",
    }
]

function Voting() {
    const[data, setData] = useState(dummyIdeas)
    const [submitted, setsubmitted] = useState(0)
    const addToData = (idea) => {
        let d = data
        d.push(idea)
        setData(d)
        console.log(d)
        setsubmitted(submitted+1)
    }
    return (        
        <div className="main">
            {/*left section*/}
            <Left data={data} submitted={submitted}/>
            {/*right section*/}
            <Right data={data} addToData={addToData} />
        </div>
    )
}

export default Voting
