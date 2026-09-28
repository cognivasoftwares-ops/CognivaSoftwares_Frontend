import axios from 'axios';

/**
 * Shared axios instance for the Cogniva backend.
 * Configure the URL with VITE_API_BASE_URL in a .env file (see .env.example).
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

/** Turn an axios error into a friendly message + optional per-field errors. */
export function parseApiError(error) {
  const data = error?.response?.data;
  if (!error?.response) {
    return {
      message: 'We could not reach our server. Please check your connection or email us directly.',
      fieldErrors: {},
    };
  }
  return {
    message: data?.message || 'Something went wrong. Please try again.',
    fieldErrors: data?.fieldErrors || {},
  };
}

export default apiClient;
