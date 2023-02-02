const e1={
    id : 1,
    name: 'Harry Potter',
    salary: 85000,
    city: 'london',
    department: 'IT'
};

const e2={
    id : 2,
    name: 'Ronald Weasley',
    salary: 75000,
    city: 'kent',
    department: 'ADMIN'
};

const e3={
    id : 3,
    name: 'Hermione Granger',
    salary: 95000,
    city: 'london',
    department: 'IT'
};

const e4={
    id : 4,
    name: 'Draco Malfoy',
    salary: 80000,
    city: 'manchester',
    department: 'SALES'
};

let employees = [e1,e2,e3,e4]; 

function showEmployees(){
    displayEmployees(employees);
}

function displayEmployees(emp){
    let i=1;
    document.getElementById('emp1').innerHTML='';
    document.getElementById('emp2').innerHTML='';
    document.getElementById('emp3').innerHTML='';
    document.getElementById('emp4').innerHTML='';

    emp.forEach(e=>{
         document.getElementById('emp' + i).innerHTML= '<th scope="row">' 
                                    + e.id + '</th>' +
                                    '<td>' + e.name + ' </td>' + 
                                    '<td>' + e.salary + '</td>' + 
                                    '<td>' + e.city + '</td>' + 
                                    '<td>' + e.department + '</td>';
       i++;                          
    }); 
}

function sortEmployeesBySalary(order){
    let temp=[];
    switch(order){
        case 'ASC':
            temp = employees.sort((e1,e2)=>e1.salary - e2.salary);
            break;
        case 'DESC':
            temp = employees.sort((e1,e2)=>e2.salary - e1.salary);
            break;
    }
    displayEmployees(temp);
}

function filterEmployees(str){
     if(str == '' || str == undefined){
        displayEmployees(employees);
     }
     else{
        let temp =  employees.filter(e=>e.department.toLowerCase().startsWith(str.toLowerCase()));
        displayEmployees(temp);
     }
    
}

    
 


 