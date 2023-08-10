export const API_URL = process.env.REACT_APP_API_URL;

export const apiGet = (url: string) => {
  return fetch(`${API_URL}${url}`)
    .then(response => response.json())
    .then(json => {
      return json.data;
    })
    .catch(error => {
      console.error(error);
    });
};
