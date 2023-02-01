mainFunc = ()=>{
    let encodedUrl = urlEncoding('http://127.0.0.1:5500/javascript/form.html?name=&email=&password=&address=&city=&age=&cv=&joiningDate=&rating=3');
    decodeUrl(encodedUrl);
    console.log(currentDate());
    console.log(customDate());
    console.log(dateDiff(customDate(), currentDate()));
}

function readFormAndValidate(){
    let name = document.getElementById('name').value;
    console.log('Name: ' + name);
    let email = document.myForm.email.value; 
    console.log('Email: ' + email);
    let password = document.myForm.password.value; 
    console.log('Password: ' + password);

    let sports = document.myForm.sport;
    let favSport = [];

    for(let i=0; i<sports.length; i++){
        if(sports[i].checked == true)
            favSport.push(sports[i].value);
    }
    
    console.log(favSport);

    let address = document.myForm.address.value; 
    let college = document.myForm.college.value;
    console.log(address + '---' + college);

    let city = document.myForm.city.value;
    let age = document.myForm.age.value;
    let joiningDate = document.myForm.joiningDate.value;
    let rating = document.myForm.rating.value;
    let cv = document.myForm.cv.value;
    console.log(city + ','+ age + ',' + joiningDate + ','+rating);
    console.log(cv);

    return false;
}

/* URL Encoding and Decoding */
urlEncoding = (url)=>{
    let encodedUrl = encodeURIComponent(url);
    return encodedUrl;
}

decodeUrl = (url)=>{
    console.log(decodeURIComponent(url));
}

currentDate = () => {
    const todaysDate = new Date();
    return todaysDate;   
}

customDate = () => {
    const customDate = new Date(2011,03,21); //03: April 
    return customDate;
}

dateDiff = (startDate,endDate)=>{
   // return endDate.getDate() - startDate.getDate(); 
   //return endDate.getYear() - startDate.getYear();
   return endDate.getMonth() - startDate.getMonth();
}
/*
let: used to define local variable. value can be changed
const: can be used to define local and global variable but value remains constant.  
*/
