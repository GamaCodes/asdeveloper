import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://asdeveloper.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ baseURL });

const SERVICE = {
  test: async () => {
    return await service.get('/');
  }
};


export const createContact = async (name, email, phone, reason, message) => {
  const { data } = await service.post("/contact", { name, email, phone, reason, message });
  return data;
};


export default SERVICE;