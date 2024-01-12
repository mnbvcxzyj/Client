import countries from 'i18n-iso-countries';

export const getFlagEmoji = (countryName) => {
    countries.registerLocale(require("i18n-iso-countries/langs/ko.json"));
    const countryCode = countries.getAlpha2Code(countryName, 'ko');
    return countryCode ? `fi fi-${countryCode.toLowerCase()}` : '';
}
