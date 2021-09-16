function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}



export function backendLookup(method,endpoint,callback,data){
  // const create_url = `http://localhost:8000/api/tweets/create`
  // const page = new XMLHttpRequest()

  // page.responseType = 'json'
  // if (method === "POST")

  let jsonData;
    if (data){
      jsonData = JSON.stringify(data)
    }
    const xhr = new XMLHttpRequest()
    const url = `http://localhost:8000/api${endpoint}`

    console.log(url)

    xhr.responseType = "json"
    xhr.open(method, url)
    const csrftoken = getCookie('csrftoken');
    xhr.setRequestHeader("Content-Type","application/json")
   
    if (csrftoken){
      if(method === 'POST'){
        // xhr.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest")
      }
      xhr.setRequestHeader("X-Requested-With","XMLHttpRequest")
      xhr.setRequestHeader("X-CSRFToken",csrftoken)

    }
    xhr.onload = function () {
      console.log("this is ", xhr.response)
      callback(xhr.response,xhr.status)
    }
    xhr.onerror = function(e){
      callback({"message":"The request was as error"},400)
    }
    xhr.send(jsonData)
}

