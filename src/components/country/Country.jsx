import { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    // const [name] = country;
    const { name, flags, popolation, area } = country;
    const [visit, setVisit] = useState(false)
    const Toggle = () => {
        setVisit(!visit)
    }

    return (
        <div className='country'>
            <h4>name:{name?.common}</h4>
            <img src={flags.png} alt="" />
            <h4>population:{popolation}</h4>
            <h4>area:{area}</h4>
            <button onClick={Toggle}>{visit ? 'went' : 'go'}</button>
            {
                visit ? 'i have visited' : 'i will visit'
            }
        </div>
    )
}
export default Country;