'use strict';

import { addItem } from '../handlers/additem.js';



const addItems = document.querySelector('.add-items');

addItems.addEventListener('submit', addItem);