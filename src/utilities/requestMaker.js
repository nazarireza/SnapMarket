const BASE_URL = 'https://api.snapp.market/mart/v1';

const GET_URL = (endpoint, query = []) => {
  let queryString = Object.keys(query)
    .map(key => key + '=' + query[key])
    .join('&');
  return `${BASE_URL}${endpoint}?${queryString}`;
};

export const get = async (endpoint, query = []) => {
  let response = await fetch(GET_URL(endpoint, query), {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (response.status !== 200) throw new Error('status code is invalid.');

  return await response.json();
};
