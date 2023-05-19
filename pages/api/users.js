import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2';

export const getUserDetailById = async (id) => {
  try {
    const response = await axios.get(api_url+`/users/${id}`);
    return response.data.user;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserDetails = async (values,id) => {
  try {
      const response = await axios.put(api_url+`/users/${id}`,{
          name: values.fullname,
          email:values.email,
          password:values.password,
          portfolio_url:values.personalWebsite,
          instagram_url:values.instagram,
          linkedin_url:values.linkedin,
          user_about:values.about,
          task_definition:values.taskDefinition,
          birthdate:values.birthdate,
          phone_number:values.phone,
          gender:values.gender,
          city_id:values.city,
          district_id:values.district,
          image_path:values.profileImage,
          user_type:"user"
      });
      console.log(response.data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: "Kullanıcı bilgileri güncellendi",
        showConfirmButton: false,
        timer: 1000
    })
      return response.data.data;
  } catch (error) {
      console.error(error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: "Güncelleme işlemi sırasında hata oluştu." +
        "Hata :"+JSON.stringify(error.response.data.errors),
        showConfirmButton: false,
    })
  }
};
