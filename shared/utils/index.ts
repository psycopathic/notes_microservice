import { ApiResponse } from "../types/index.js";

export const createApiResponse = <T>(
  success: boolean,
  data?: T,
  message?: string,
  error?: string,
  errors?: Record<string, string[]>
): ApiResponse<T> => {
  const response: ApiResponse<T> = { success };

  if (data !== undefined) {
    response.data = data;
  }

  if (message !== undefined) {
    response.message = message;
  }

  if (error !== undefined) {
    response.error = error;
  }

  if (errors !== undefined) {
    response.errors = errors;
  }

  return response;
};
