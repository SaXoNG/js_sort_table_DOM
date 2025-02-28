'use strict';

const columnHeaders = Array.from(document.querySelector('tr').children);

for (let i = 0; i < columnHeaders.length; i++) {
  columnHeaders[i].addEventListener('click', () => {
    const column = Array.from(document.querySelector('tbody').children);
    const unsortedList = [];

    for (let h = 0; h < column.length; h++) {
      unsortedList.push(column[h].children[i].textContent);
    }

    const sortedList = unsortedList.sort();

    for (let j = 0; j < column.length; j++) {
      column[j].children[i].textContent = sortedList[j];
    }
  });
}

// const nativeList = document.querySelector('ul');

// console.log(nativeList)

// function getEmployees(list) {
//   return Array.from(list).map((item) => ({
//     element: item,
//     salary: formatSalary(item.dataset.salary),
//   }));
// }

// function sortList(employees) {
//   return employees.sort((a, b) => b.salary - a.salary);
// }

// function formatSalary(salary) {
//   return Number(salary.replace(/[$,]/g, ''));
// }

// const sortedEmployees = sortList(getEmployees(nativeList.children));

// nativeList.innerHTML = '';
// sortedEmployees.forEach((employee) => nativeList.appendChild(employee.element));
