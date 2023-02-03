let posts=[];
async function getAllPosts(){
        let response  = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        let data = await response.json(); 
        posts = data;
        /*
        1. Call the API and save it in response
        2. convert response to JSON
        3. assign data of API to posts
        */  
       let str='';
        posts.forEach(p => {
            str = str + '<div class="jumbotron"><h1 class="display-6">' + 
            p.title + '</h1><p class="lead">' + p.body + '</p><hr class="my-4"></div>';
        });
        
        document.getElementById('post').innerHTML=str;
     
}


function showForm(){
    document.getElementById('postform').style.display = 'block'; 
}


async function addPost(){
    let posttitle = document.getElementById('posttitle').value;
    let postbody = document.getElementById('postbody').value;

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: posttitle,
            body: postbody,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await response.json();
    posts.push(data);
    posts = posts.sort( (p1,p2)=>p2.id - p1.id);
    let str='';
    posts.forEach(p => {
        str = str + '<div class="jumbotron"><h1 class="display-6">' + 
        p.title + '</h1><p class="lead">' + p.body + '</p><hr class="my-4"></div>';
    });
    
    document.getElementById('post').innerHTML=str;
    document.getElementById('postform').style.display = 'none'; 
}

