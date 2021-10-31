export type idTypes = number | string
export type displayingTypes = "all" | "active" | "completed"

export interface ITodo{
  id: idTypes;
  text: string;
  done: boolean;
}