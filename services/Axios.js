import axios from "axios";


const instance = axios.create({
  baseURL: 'https://blood-pressure-api-88qa2.ondigitalocean.app/'
})

//Añadir a interceptor
instance.interceptors.request.use(async (config) => {

  /* let localData = localStorage.getItem('authIndex')
  let localDataText = JSON.parse(localData) */
  //const token = localDataText.token;
  const token = localStorage.getItem('jwtToken');

  if(token) {
    config.headers.Authorization = 'Bearer '+ token;
  }

  return config;

}, error => {
  return Promise.reject(error);
});

	// Add a response interceptor
	instance.interceptors.response.use(function (response) {
	  // console.log('RESPONSE ' + response.config.url + ' [status] ::', response.status, ' - ', response.statusText);
	  // console.log('RESPONSE ' + response.config.url + ' [data] ::', response.data);
	  // console.log('RESPONSE TOTAL ' + response);
	
	  return response;
	}, function (error) {
    if(error.response.request.status === 401){
      localStorage.clear();
      //window.location.reload();
    } 
    if(error.response){
      console.log('ERROR RESPONSE',error.response.request.status);
    }
    else if (error.request){
      console.log('ERROR REQUEST',error.request);
    } 
    else {
      console.log('ERROR MESSAGE',error.message);
    }
    
	  return Promise.reject(error);
	});
	
	export default instance;