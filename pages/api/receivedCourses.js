import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2';
import Router from 'next/router';

export const addReceivedCourse = async (userId,courseId) => {
    try {
        const response = await axios.post(api_url+`/received-courses`,{
            user_id :userId,
            course_id :courseId,
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: "Kurs alınanlara eklendi",
            showConfirmButton: false,
            timer: 1000
        })
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: "Kurs ekleme sırasında hata oluştu. " +
            "Hata :"+JSON.stringify(error.response.data.error),
            showConfirmButton: false,
        })
    }
};

export const getReceivedCoursesByUserId = async (id) => {
    try {
      const response = await axios.get(api_url+`/received-courses/${id}`);
      return response.data.courses;
    } catch (error) {
      console.error(error);
    }
};


