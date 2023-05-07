import axios from 'axios';
import { api_url } from './hello';

export const getAllCities = async () => {
  try {
    const response = await axios.get(api_url+`/cities`);
    return response.data.cities;
  } catch (error) {
    console.error(error);
  }
};

export const getDistrictsByCityId = async (cityId , setter) => {
  try {
    const response = await axios.get(api_url+`/districts/${cityId}`);
    setter(response.data.districts) 
    return response.data.districts;
  } catch (error) {
    console.error(error);
  }
};
