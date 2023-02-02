const arry = [85,43,1,20,34,8,80,67,23,7];

function fetchAllElements(){
    let len = arry.length;
    document.getElementById('allelements').innerHTML='<br><strong>' + arry + '</strong>';
    document.getElementById('arrayLength').innerHTML='Array Length = ' + len;
}

function iterateArray(){
    arry.forEach(e=>console.log(e)); 
    joinArray();
  //  fillArray();
}

function sortArray(sort){
    let temp = [];
    if(sort == 'ASC')
        temp = arry.sort((a,b)=>a-b);
    else
        temp = arry.sort((a,b)=>b-a);  

    document.getElementById('allelements').innerHTML='<br><strong>' + temp + '</strong>';

}

function filterArray(str){
    let temp =[];
    let num = Number(document.getElementById('num').value);
    if(str == 'SMALL')
        temp = arry.filter(e=>e<num);
    else
        temp = arry.filter(e=>e>num);
    
    document.getElementById('allelements').innerHTML='<br><strong>' + temp + '</strong>';
    document.getElementById('arrayLength').innerHTML='Array Length = ' + temp.length;
}

function joinArray(){ //Generates String of Array 
    let temp = arry.join('-');
    console.log(temp);
    //let tempArry = temp.split('-'); : gives array back from String 
}

function fillArray(){
    let temp = arry.fill(5);
    console.log(temp);
}

function searchElement(){
    let num = Number(document.getElementById('snum').value);
    if(arry.find(e=>e == num) == undefined)
        document.getElementById('findResult').innerHTML='Element ' + num + ' is NOT Found!!';
    else
        document.getElementById('findResult').innerHTML='Element ' + num + ' is Found!!';
}
/* Predicate: given an expression that returns a boolean */