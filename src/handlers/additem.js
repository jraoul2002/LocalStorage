'use strict';

import {populateList} from './populateList.js';


const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];




export  function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}