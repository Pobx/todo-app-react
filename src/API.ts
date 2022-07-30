import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:3001/todo";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType<ITodo[]>>> => {
  try {
    const entity: AxiosResponse<ApiDataType<ITodo[]>> = await axios.get(`${baseUrl}/findAll`);

    return entity;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const addTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType<ITodo>>> => {
  try {
    const response: AxiosResponse<ApiDataType<ITodo>> = await axios.post(baseUrl, todo);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType<ITodo>>> => {
  try {
    const response: AxiosResponse<ApiDataType<ITodo>> = await axios.put(baseUrl, todo);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};

export const deleteTodo = async (id: number): Promise<AxiosResponse<ApiDataType<ITodo>>> => {
  try {
    const response: AxiosResponse<ApiDataType<ITodo>> = await axios.delete(`${baseUrl}?id=${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("APIs error");
  }
};
