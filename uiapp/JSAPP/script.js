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
       displayPosts(posts);
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
     displayPosts(posts);
    document.getElementById('postform').style.display = 'none'; 
}

async function deletePost(id){
    //console.log(id);
    /* Call Delete API */
    let response  = await fetch('https://jsonplaceholder.typicode.com/posts/' + id,{
        method: 'DELETE',
    });
    if(response.status == 200){
        posts = posts.filter(p=>p.id !== id); 
    }
    displayPosts(posts);
}


function displayPosts(posts){
    let str='';
    posts.forEach(p => {
        str = str + '<div class="jumbotron"><h1 class="display-6">' + 
        p.title + '</h1><p class="lead">' + p.body 
        + '</p> <button class="btn btn-secondary" onClick="deletePost('
        + p.id +')">Delete Post</button><hr class="my-4"></div>';
    });
     
     document.getElementById('post').innerHTML=str;
}