import axios from 'axios';
import { api_url } from './hello';

export const getAllCategories = async () => {
  try {
    const response = await axios.get(api_url+`/categories`);
    console.log(response.data);
    return response.data.categories;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
    try {
      const response = await axios.get(api_url+`/categories/${id}`);
      console.log(response.data.category);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const addCategory = async (values) => {
    try {
        const response = await axios.post(api_url+`/categories`,{
            category_name: values.categoryName,
            is_confirm:false,
        });
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateCategory = async (id) => {
  try {
      const response = await axios.put(api_url+`/categories/${id}`,{
          category_name: values.categoryName,
          is_confirm:true,
      });
      console.log(response.data);
      return response.data.data;
  } catch (error) {
      console.error(error);
  }
};

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(api_url+`/categories/${id}`);
        console.log(response.data);
        document.location="/categories"
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

