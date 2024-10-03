// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Generic = any;

export interface GenericObject {
  [key: string]: Generic | GenericObject;
}
