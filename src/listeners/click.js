'use strict';

import { toggleDone } from '../handlers/toggle.js';





const itemsList = document.querySelector('.plates');



itemsList.addEventListener('click', toggleDone);