import countrieslistHbs from '../templates/countries-list.hbs';
import countryInfoHbs from '../templates/country-info.hbs';
import refs from './refs.js';

function renderCountry(data) {
  const markup = countryInfoHbs(data[0]);
  refs.countryContainer.innerHTML = '';
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

function renderCoutriesList(data) {
  refs.countryContainer.innerHTML = '';
  refs.countryContainer.insertAdjacentHTML('beforeend', countrieslistHbs(data));
}

export { renderCountry, renderCoutriesList };
