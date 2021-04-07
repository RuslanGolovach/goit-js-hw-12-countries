import refs from './refs.js';
import { renderCountry, renderCoutriesList } from './render.js';
import fetchCountries from './fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { alert, notice, info, success, error } from '@pnotify/core';

const debounce = require('lodash.debounce');
let searchQuery = '';
refs.searchInput.addEventListener('input', debounce(onInput, 500));
function onInput(event) {
  searchQuery = event.target.value;
  if (event.target.value === '') {
    refs.countryContainer.innerHTML = '';
    return;
  }
  fetchCountries(searchQuery).then(data => {
    checkPromisse(data);
  });
}

function checkPromisse(data) {
  if (data.length === 1) {
    renderCountry(data);
    success({
      text: 'Good search',
      delay: 500,
    });
  } else if (data.length >= 2 && data.length <= 10) {
    renderCoutriesList(data);
  } else if (data.length === 0) {
    error({
      text: 'No matches found',
      delay: 500,
    });
  } else {
    error({
      text: 'Too many matches found. Please enter a more specific query',
      delay: 500,
    });
  }
}
