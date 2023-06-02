import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2';

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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          text: "Kategori eklendi",
          showConfirmButton: false,
          timer: 1000
      })
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          text: "Kategori ekleme sırasında hata oluştu. " +
          "Hata :"+JSON.stringify(error.response.data.error),
          showConfirmButton: false,
      })
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

