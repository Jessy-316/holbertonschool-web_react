interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Juan Jose",
  lastName: "Mendez Torres",
  age: 25,
  location: "Juana Díaz"
}

const student2: Student = {
  firstName: "Francisco Antonio",
  lastName: "Báez López",
  age: 31,
  location: "Juana Díaz"
}

const studentsList: Array<Student> = [student1, student2]

const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>lastName</th><th>age</th><th>location</th></tr>';
table.appendChild(thead);
const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);
for (let i: number = 0; i < studentsList.length; i++) {
  const row: HTMLTableRowElement = document.createElement('tr');
  const td1: HTMLTableCellElement = document.createElement('td');
  const td2: HTMLTableCellElement = document.createElement('td');
  const th3: HTMLTableCellElement = document.createElement('th');
  const td4: HTMLTableCellElement = document.createElement('td');
  td1.innerHTML = studentsList[i].firstName;
  td2.innerHTML = studentsList[i].lastName;
  th3.innerHTML = String(studentsList[i].age);
  td4.innerHTML = studentsList[i].location;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(th3);
  row.appendChild(td4);

  tbody.appendChild(row);
}
