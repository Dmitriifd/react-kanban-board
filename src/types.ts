export type Id = string;

export type Column = {
  id: string;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};
