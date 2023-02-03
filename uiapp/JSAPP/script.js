
function getAllPosts(){
    let posts=[];

    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(response=>response.json())                
        .then(data=> {
            data.forEach(p => {
                posts.push(p);
            });
        });     
        
        /*
        1. Call the API
        2. convert response to JSON
        3. assign data of API to posts
        */
         
        console.log(posts);
}