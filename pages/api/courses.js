import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2';
import Router from 'next/router';

export const getAllCourses = async () => {
    try {
      const response = await axios.get(api_url+`/courses`);
      return response.data.courses;
    } catch (error) {
      console.error(error);
    }
};

export const getCoursesByUserId = async (id) => {
    try {
      const response = await axios.get(api_url+`/courses/${id}`);
      return response.data.courses;
    } catch (error) {
      console.error(error);
    }
};

export const getCourseDetailByCourseId = async (id) => {
    try {
      const response = await axios.get(api_url+`/course/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};


export const addCourse = async (values,userId) => {
    try {
        const response = await axios.post(api_url+`/courses`,{
            title :values.courseTitle,
            description:values.description,
            user_id:userId,
            category_id:values.category,
            image_path:"https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            is_confirm:false
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: "Ders eklendi",
            showConfirmButton: false,
            timer: 1000
        })
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: "Ders ekleme sırasında hata oluştu. " +
            "Hata :"+JSON.stringify(error.response.data.error),
            showConfirmButton: false,
        })
    }
};

export const updateCourse = async (values,id) => {
  try {
      const response = await axios.put(api_url+`/courses/${id}`,{
          title :values.courseTitle,
          description:values.description,
          //user_id:userId,
          category_id:values.category,
          image_path:"https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          is_confirm:false
      });
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          text: "Ders güncellendi",
          showConfirmButton: false,
          timer: 1000
      })
        Router.reload(window.location.pathname);
        return response.data.data;
  } catch (error) {
      console.error(error);
      Swal.fire({
          position: 'top-end',
          icon: 'error',
          text: "Ders güncelleme sırasında hata oluştu. " +
          "Hata :"+JSON.stringify(error.response.data.message),
          showConfirmButton: false,
      })
  }
};