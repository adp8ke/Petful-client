import config from '../config';


const adoptedApiService = {
    
  getAdopted() {
    return fetch(`${config.API_ENDPOINT}/adopted`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
};


export default adoptedApiService;