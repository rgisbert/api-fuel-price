import { APISpanishGovernment as APIFuel } from '../api';

export class Fuel {
    constructor(public fuel: string) {}

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

    /** Check if fuel id exists */
    async checkTypeExists() {
        try {
            const data = await Fuel.getTypeList();
            const exists = data.find((fuel) => fuel.id === this.fuel);

            return Boolean(exists);
        } catch (error) {
            return false;
        }
    }
}
