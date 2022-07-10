import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:3000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const addTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add",
      todo
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.put(
      baseUrl + "/edit?id=" + todo.id,
      todo
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const deleteTodo = async (
  id: number
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + "/delete?id=" + id
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};
