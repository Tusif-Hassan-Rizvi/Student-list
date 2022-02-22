let pull = document.getElementById('pull');
let hide = document.getElementById('hide');
let table = document.getElementById('table');
hide.style.display='none';



// student name list
let students = ["Tusif", "Suhel", "Usama", "Saif", "Yusra", "Shivani", "Sahib", "Nisha", "Neeraj", "Vishal", "Kulsum", "Arif", "Zara", "Zuha", "Tafziluddin", "Nazia", "sumaiya", "Shilpa", "Shubham"];

// show button logic
pull.addEventListener('click', data);


function data() {
    pull.style.backgroundColor = 'green';
    setTimeout(() => {
        pull.style.backgroundColor = 'rgb(70, 70, 153)';
    }, 100);


    if (table.style.display == 'none') {
        table.style.display = 'block';
    }
    else {
        table.style.display = 'block';
    }

    let html = "";

    for (let name of students) {
        let index = students.indexOf(name);

        html += `<li type="none">Name of (PGDCA 2021-22) student <b>${index + 1}</b> is: <b>${name}</b></li>`;

    }
    table.innerHTML = html;
    hide.style.display='block';
    pull.style.display='none';
   

}

// hide button logic
hide.addEventListener('click', erase);
function erase() {
    hide.style.backgroundColor = 'green';
    setTimeout(() => {
        hide.style.backgroundColor = 'rgb(70, 70, 153)';
    }, 100);

    if (table.style.display == 'block') {

        table.style.display = 'none';
    }
   pull.style.display='block';
   hide.style.display='none';

   
}