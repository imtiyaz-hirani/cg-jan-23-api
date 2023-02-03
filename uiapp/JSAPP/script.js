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

