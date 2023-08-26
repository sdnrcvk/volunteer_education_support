import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2'

// export const login = async (values) => {
//     try {
//         const response = await axios.post(api_url+`/login`,{
//             email: values.email,
//             password:values.password
//         });
//         console.log(response.data);
//         return response.data.data;
//     } catch (error) {
//         console.error(error);
//         Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             text: "Giriş yapılırken hata oluştu. " +
//             "Hata :"+JSON.stringify(error.response.data.errors),
//             showConfirmButton: false,
//         })
//     }
// };

export const register = async (values) => {
    try {
        const response = await axios.post(api_url+`/users`,{
            name : values.firstName+" "+values.lastName,
            email:values.email,
            password:values.password,
            // portfolio_url:"erggr",
            // instagram_url:"dfggr",
            // linkedin_url:"rtgrg",
            // user_about:"yhtgrfggytr",
            // task_definition:"mühendis",
            birthdate:values.birthdate,
            phone_number:values.phone,
            gender:values.gender,
            city_id:values.city,
            district_id:values.district,
            user_type:"user"
        });
        console.log(response.data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            text: "Kullanıcı kaydı oluşturuldu",
            showConfirmButton: false,
            timer: 1000
        })
        document.location="/login"
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: "Kayıt işlemi sırasında hata oluştu." +
            "Hata :"+JSON.stringify(error.response.data.errors),
            showConfirmButton: false,
        })
    }
};