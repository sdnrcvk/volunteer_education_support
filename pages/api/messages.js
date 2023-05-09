import axios from 'axios';
import { api_url } from './hello';

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
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteMessage = async (id) => {
    try {
        const response = await axios.delete(api_url+`/messages/${id}`);
        console.log(response.data);
        document.location="/messages"
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};
