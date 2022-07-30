interface ITodo {
  id: number;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updateAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDataType<T> = {
  message: string[];
  entity: T;
};
