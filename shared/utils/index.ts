import { ApiResponse, ServiceError } from "../types/index.js";

export const createApiResponse = <T>(
  success: boolean,
  data?: T,
  message?: string,
  error?: string,
  errors?: Record<string, string[]>
): ApiResponse<T> => {
  return {
    success,
    data,
    message,
    error,
    errors,
  };
};


export const createErrorResponse = (error: string): ApiResponse => {
  return createApiResponse(false, undefined, undefined, error);
}

export const createServiceError = (message: string, statusCode: number = 500, code?: string, details?: any): ServiceError => {
  return new ServiceError(message, statusCode, code, details);
}