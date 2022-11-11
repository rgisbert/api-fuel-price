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
