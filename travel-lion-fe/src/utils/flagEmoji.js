// const countryCodes = {
//     '한국': 'KR',
//     '미국': 'US',

// };


// export const getFlagEmoji = (countryName) => {
//     const countryCode = countryCodes[countryName];
//     if (!countryCode) return '';

//     const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
//     return String.fromCodePoint(...codePoints);
// };

import { countryData } from '../data/CountryData';

export const getFlagEmoji = (countryName) => {
    const country = countryData.countries.find(c => c.name === countryName);
    return country ? country.flag : '';
}

