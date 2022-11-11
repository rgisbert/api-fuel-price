export class GoogleMaps {
    /**
     * Calculate a Google Maps URL with latitud and longitude
     * @param { string } latitude
     * @param { string } longitude
     * @returns { string } URL to the place
     */
    static getUrlWithCoordinates(latitude: string, longitude: string) {
        const lat = latitude.replace(',', '.');
        const lng = longitude.replace(',', '.');

        return `https://www.google.es/maps?q=${lat},${lng}`;
    }
}
