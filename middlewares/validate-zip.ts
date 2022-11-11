import { isZipInRange, isZipNumber } from '../helpers';

/** Check if is a valid zip code in Spain */
export const isValidZIP = (zip: string) => {
    if (!isZipNumber(zip)) {
        throw new Error('El CP debe ser un número');
    }

    if (!isZipInRange(zip)) {
        throw new Error(`"${zip}" no es un CP válido`);
    }

    return true;
};
