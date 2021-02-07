import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '132dc35ecb48fadc157488a21a3da282'
  }
});
