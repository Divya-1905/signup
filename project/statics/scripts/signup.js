var email,phone
fetch('http://127.0.0.1:8000/signup',{
    method:'POST',
    body:JSON.stringify({'email':email,'phone':phone}),
    headers:new Headers({
        'Content_type':'application/json',
        'X-CSRFToken':'csrftoken',
    })
    }).then(res =>{
            return res.json()
    }).then(data =>{
        if (`${data.status}` == 'Registered succesfull') {
            window.location.href = `${host}/login`
        }
    })


function signup() {
     phone = document.getElementById('phone_id').value
     email = document.getElementById('email_id').value
     let signup_error = document.querySelector('.error-signup')
     let error = ''
     if(!email){
        error +=`<p>incorrectemail</p>` 
     }0
     if(!phone){
        error +=`<p>incorrectphone</p>`
     }
     if(!email||phone){
        signup_error.innerHTML= error
        
     }   
}
function checkemail(check){
    fetch('http://127.0.0.1:8000/check',{
        method:'GET',
    }).then(res=>{
        if(res.status!=200){
            document.querySelector('.error-signup').innerHTML = 'incorrect'
        }
        else{
            document.querySelector('.eorror-signup').innerHTML =''
        }
        
        
    })

}
function checkphone(check){
    fetch('http://127.0.0.1:8000/check',{
        method:'GET',
    }).then(res=>{
        if(res.status!=200){
            document.querySelector('.error-signup').innerHTML = 'incorrect'
        }
        else{
            document.querySelector('.eorror-signup').innerHTML =''
        }
        
        
    })

}