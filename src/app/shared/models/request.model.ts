export enum RequestType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type AppParams = { [key: string]: string | number | boolean | undefined | null } | undefined;

export interface Request {
  type: RequestType;
  url: string;
  params?: AppParams;
  headers?: Record<string, string>;
  propertiesData?: string[];
}

export interface RequestWithBody<T> extends Request {
  type: RequestType.POST | RequestType.PUT;
  body: T;
}

export interface RequestWithParams extends Request {
  type: RequestType.GET | RequestType.DELETE;
}
