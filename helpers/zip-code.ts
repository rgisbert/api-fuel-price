/**
 * Complete the zip code with a 0 at the beginning if it is necessary .
 * If zip code is lower than 10000 only will have 4 characters, but 5 are needed
 * @param { string } zip - zip code provided
 * @returns { string } If necessary, complete the zip code
 */
export const completeZipCode = (zip: string): string => {
    return zip.length === 4 ? `0${zip}` : zip;
};

/**
 * Return the province from a given zip code
 * @param { string } zip - Zip code to extract the province
 * @returns { string } A string which represents a province
 */
export const getProvinceCodeFromZip = (zip = '00000'): string => {
    try {
        return zip.length === 5 ? zip.slice(0, 2) : `0${zip.at(0)}`;
    } catch (error) {
        return '00';
    }
};

/**
 * The first one or two numbers in zip code represents the province.
 * That's why must be bigger or equal tan 1,000 and lower than 53,000
 * because there are 52 provinces in Spain
 */
export const isZipInRange = (zip: string): boolean => {
    try {
        const zipNumber = Number(zip);

        return zipNumber >= 1_000 && zipNumber < 53_000;
    } catch (error) {
        return false;
    }
};

/** Zip codes in Spain are only represented by numbers */
export const isZipNumber = (zip: string): boolean => {
    try {
        const zipNumber = Number(zip);

        return !isNaN(zipNumber);
    } catch (error) {
        return false;
    }
};
