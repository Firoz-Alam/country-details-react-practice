import React from 'react';

const Country = (props) => {
    const {name,region,population,flags} = props.country;
    console.log(props);
    const countryStyle = {border: '1px solid green',margin: '10px',padding: '10px'};
    const flagStyle = {height: '50px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <p>This is {name.common}</p>
            <img style={flagStyle} src={flags.png} alt="" />
            <p><small> Region: {region} </small></p>
            <p><small>Population: {population}</small></p>
            <button onClick={()=> handleAddCountry(props.country)}>Add Here</button>
        </div>
    );
};

export default Country;