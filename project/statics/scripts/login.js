var email,phone
fetch('http://127.0.0.1:8000/login/',{
    method:'POST',
    body:JSON.stringify({'email':email,'phone':phone}),
    headers:new Headers({
        'X-CSRFToken':'csrftoken',
        'Content-type':'application/json'
    })
    }).then(res =>{
    return res.JSON()
    }).then (res =>{
    return res.data()
    })
    if(data.data.token){
        localStorage.setItem('taken',data.data.token)
        localStorage.setItem('id',data.data.id)
    }
    