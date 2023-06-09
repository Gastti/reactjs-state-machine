export const fetchCountries = () => 
    fetch('https://restcountries.com/v3.1/region/me')
        .then((res) => res.json());