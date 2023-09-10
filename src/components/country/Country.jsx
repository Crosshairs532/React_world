import './country.css'

const Country = ({ country }) => {
    // const [name] = country;
    const { name, flags, popolation, area } = country;

    return (
        <div className='country'>
            <h4>name:{name?.common}</h4>
            <img src={flags.png} alt="" />
            <h4>population:{popolation}</h4>
            <h4>area:{area}</h4>
        </div>
    )
}
export default Country;