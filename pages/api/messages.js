import axios from 'axios';
import { api_url } from './hello';
import Swal from 'sweetalert2';

export const getAllMessages = async () => {
    try {
        const response = await axios.get(api_url+`/messages`);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const sendMessage = async (values) => {
    try {
        const response = await axios.post(api_url+`/messages`,{
            fullname: values.fullname,
            email:values.email,
            message:values.message,
        });
        console.log(response.data);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: "Mesaj gönderildi",
            showConfirmButton: false,
            timer: 1000
        })
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: "Mesaj gönderme sırasında hata oluştu. " +
            "Hata :"+JSON.stringify(error.response.data.error),
            showConfirmButton: false,
        })
    }
};

export const deleteMessage = async (id) => {
    try {
        const response = await axios.delete(api_url+`/messages/${id}`);
        console.log(response.data);
        document.location="/messages"
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: "Mesaj silindi",
            showConfirmButton: false,
            timer: 1000
        })
        return response.data.data;
    } catch (error) {
        console.error(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: "Mesaj silme sırasında hata oluştu. " +
            "Hata :"+JSON.stringify(error.response.data.error),
            showConfirmButton: false,
        })
    }
};
