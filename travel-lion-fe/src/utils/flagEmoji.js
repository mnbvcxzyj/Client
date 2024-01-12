import countries from 'i18n-iso-countries';

countries.registerLocale(require("i18n-iso-countries/langs/ko.json"));

export const getFlagEmoji = (countryName) => {
    const countryCode = countries.getAlpha2Code(countryName, 'ko');
    return countryCode ? `fi fi-${countryCode.toLowerCase()}` : '';
}
