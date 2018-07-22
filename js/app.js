document.addEventListener('DOMContentLoaded', () => {
  console.log('working');

  const body = document.querySelector('body');


  const columns = document.createElement('columns');
  columns.classList.add('columns');
  body.appendChild(columns);

  const column1 = document.createElement('div');
  column1.classList.add('column1');
  columns.appendChild(column1);

  const column2 = document.createElement('div');
  column2.classList.add('column2');
  columns.appendChild(column2);

  const column3 = document.createElement('div');
  column3.classList.add('column3');
  columns.appendChild(column3);

  const column4 = document.createElement('div');
  column4.classList.add('column4');
  columns.appendChild(column4);


  // ********************************// Knife Lemon in vanilla Javascript:

  // built mobile first
  // 3/4 vertical containers (guitar hero style)
  // continual speed increase - decrement of interval to be built in to function

  // basic game logic

  // colide lemons with knife
  // avoid falling objects - lemon merngue?

  // Bonus levels to recreate actual LK events from the IG page






});
