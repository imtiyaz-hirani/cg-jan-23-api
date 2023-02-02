const arry = [85,43,1,20,34,8,80,67,23,7];

function fetchAllElements(){
    let len = arry.length;
    document.getElementById('allelements').innerHTML='<br><strong>' + arry + '</strong>';
    document.getElementById('arrayLength').innerHTML='Array Length = ' + len;
}

function iterateArray(){
    arry.forEach(e=>console.log(e)); 
}

function sortArray(sort){
    let temp = [];
    if(sort == 'ASC')
        temp = arry.sort((a,b)=>a-b);
    else
        temp = arry.sort((a,b)=>b-a);  
          
    document.getElementById('allelements').innerHTML='<br><strong>' + temp + '</strong>';

}

