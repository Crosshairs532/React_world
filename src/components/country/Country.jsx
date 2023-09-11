import { useState } from 'react';
import './country.css'

const Country = ({ country, Visited }) => {
    // const [name] = country;
    const { name, flags, popolation, area } = country;
    const [visit, setVisit] = useState(false)
    const Toggle = () => {
        setVisit(!visit)
    }
    const markVisited = () => {
        Visited(country);

    }

    return (
        <div className={`country ${visit ? 'visited' : 'non'}`}>
            <h4 style={{
                color: visit ? 'white' : "red"
            }}>name:{name?.common}</h4>
            <img src={flags.png} alt="" />
            <h4>population:{popolation}</h4>
            <h4>area:{area}</h4>
            <button onClick={Toggle}>{visit ? 'went' : 'go'}</button>
            {
                visit ? 'i have visited' : 'i will visit'
            }
            <button onClick={markVisited} >Mark as visited</button>
        </div>
    )
}
export default Country;