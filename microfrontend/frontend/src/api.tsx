import type { Blueprint } from "./HomePage/types";

// NOTE: This variable may easily become configurable
const apiUrl = "http://localhost:5901";

const api = {
  fetchBlueprints: (): Promise<Blueprint[]> => {
    return window.fetch(`${apiUrl}/blueprints`).then((data) => data.json());
  },
};

export default api;
