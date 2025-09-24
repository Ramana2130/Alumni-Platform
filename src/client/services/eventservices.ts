import axios from "axios";

// Create event
export const addEvent = async (eventData: any) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/event/add`,
    eventData
  );
  return res.data;
};

// Get all events
export const getEvents = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/event/getAll`
  );
  return res.data;
};

// Get event by id
export const getEventById = async (id: number) => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/event/getById/${id}`
  );
  return res.data;
};

// Update event by id
export const updateEvent = async (id: number, eventData: any) => {
  const res = await axios.put(
    `${import.meta.env.VITE_BACKEND_URL}/event/updateById/${id}`,
    eventData
  );
  return res.data;
};

// Delete event by id
export const deleteEvent = async (id: number) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/event/deleteById/${id}`
  );
  return res.data;
};
