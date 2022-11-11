import { APISpanishGovernment as APIFuel } from '../api';

export class Fuel {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    /** Obtains the list of fuel type */
    static async getTypeList() {
        try {
            const api = new APIFuel();
            const data = await api.getFuelList();

            return data;
        } catch (error) {
            return [];
        }
    }
}
