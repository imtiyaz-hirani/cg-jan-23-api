var users=[];
async function getAllUsers(){
    let response  = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    users = data; 
    displayUsers(users);
}

function displayUsers(users){
    let str='';
    users.forEach(user=>{
        str = str + '<div class="jumbotron"><h1 class="display-6">' 
        + user.name +  '&nbsp;|&nbsp;' + user.username + '</h1><p class="lead">' 
        + user.email+  '&nbsp;|&nbsp;' +user.phone+  '&nbsp;|&nbsp;' + user.website + '</p><p>Address: ' 
        + user.address.suite + ',' + user.address.street +  ',' + user.address.city +  ',' + user.address.zipcode + '</p><p>Company Info: '
        + user.company.name +  '|' + user.company.catchPhrase +  '|' + user.company.bs + '</p><hr class="my-4"></div>';
    })
    document.getElementById('userdata').innerHTML=str;
}
