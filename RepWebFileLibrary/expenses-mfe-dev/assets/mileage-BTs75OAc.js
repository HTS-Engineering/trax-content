const MILEAGE_ENDPOINTS = {
  // Mileage trip operations
  SUBMIT_MILEAGE: "/api/v1.0/mileage-trips",
  SAVE_DRAFT: "/api/v1.0/mileage-trips/drafts",
  GET_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  UPDATE_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  DELETE_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  GET_MILEAGE_TRIPS: "/api/v1.0/mileage-trips",
  GET_MILEAGE_TRIP: (id) => `/api/v1.0/mileage-trips/${id}`
};
export {
  MILEAGE_ENDPOINTS as M
};
