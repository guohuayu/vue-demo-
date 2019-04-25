import axios from 'axios'
var req = function (url, data, Callback) {
   axios({
    method: "POST",
    transformRequest: [
      function (data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) +
            "=" +
            encodeURIComponent(data[it]) +
            "&";
        }
        return ret;
      }
    ],
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    url: url,
    data: { data }
  }).then(res => {
    Callback(res) 
  });
} 
/* ****************拦截机****************** */
axios.interceptors.request.use(config => {
// Do something before request is sent
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});


export default  req
// this.axios.interceptors.request.use(              //这就是拦截器了， 呵呵
//   config => {
//     // Do something before request is sent
//     console.log(config);
    
//     return config;
//   },
//    error => {
//     // Do something with request error
//     return Promise.reject(error);
//   });


