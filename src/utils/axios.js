var req = function (url,data,Callback) { 
  this.axios({
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
    url:  url    ,
    data:{data}
  }).then(res => {
   Callback(res)
   
    
    
  });  
}
module.exports=req

