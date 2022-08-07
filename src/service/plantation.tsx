import { settings } from "../settings/settings"

export const Plantation = {
    get: {
        all: async () => await fetch(`${settings.baseURL}/plantation/all`).then(res => res.json()),
        detail: () => {

        }
    }
}