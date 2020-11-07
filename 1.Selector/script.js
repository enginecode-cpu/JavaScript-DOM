function init() {
  const h1List = document.getElementsByTagName('h1');
  const h1 = h1List[0];

  h1.style.color = 'green';

  const container = document.getElementById('container');
  container.style.border = '10px dashed gray';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';

  const itemList = document.getElementsByClassName('item');
  const [item1, item2, item3] = itemList;
}

init();