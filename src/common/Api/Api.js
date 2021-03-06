import { apiUrl } from '../Config/Environments';
import { Token } from '../Storage/Token';

export class Api {
  post(url, data, header) {
    let dataBody = JSON.stringify(data);

    return fetch(`${apiUrl}${url}`, {
      method: 'POST',
      mode: 'cors',
      headers: header
        ? header
        : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      body: dataBody
    })
      .then(async (response) => {
        if (response.status === 401) {
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }

  put(url, data, header) {
    let isFormData = data instanceof FormData;

    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: header
        ? header
        : isFormData
          ? { Authorization: `Bearer ${Token.getToken()}` }
          : {
            Accept: isFormData ? '' : 'application/json',
            'Content-type': isFormData ? '' : 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
      body: isFormData ? data : JSON.stringify(data)
    })
      .then(async (response) => {
        if (response.status === 401) {
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }

  get(url, params) {
    url = new URL(`${apiUrl}${url}`);
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(async (response) => {
        if (response.status === 401) {
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }
}

export default new Api();
