import { Todo, TodoStatus } from "@/types/index";

export type MappedTodos = Record<TodoStatus, Todo[]>;

export const defaultTodos: MappedTodos = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title:
        "Very long title very long title very long title very long title Very long title very long title very long title very long title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.Doing]: [
    {
      id: 2,
      title: "Todo title2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: TodoStatus.Doing,
    },
  ],
  [TodoStatus.Done]: [
    {
      id: 3,
      title: "Todo title3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: TodoStatus.Done,
    },
    {
      id: 4,
      title: "Todo single title4",
      description: "",
      status: TodoStatus.Done,
    },
  ],
};
