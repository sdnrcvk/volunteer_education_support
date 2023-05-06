import axios from 'axios';
import { api_url } from './hello';

export const getAllCategories = async () => {
  try {
    const response = await axios.get(api_url+`/categories`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
    try {
      const response = await axios.get(api_url+`/categories/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
