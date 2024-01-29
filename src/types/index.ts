export enum TodoStatus {
  Pending = "Pending",
  Doing = "Doing",
  Done = "Done",
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
}
