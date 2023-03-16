const token = "79a790716e926d0f2ec00efba410c8901efc4101";

/**
 * Объект для запросов к серверу
 */
export const http = {
  baseUrl: 'https://suggestions.dadata.ru/suggestions/',

  option: {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    }
  },

  post(url, data) {
    const path = this.baseUrl + url;
    this.option.method = 'POST';
    this.option.body = JSON.stringify(data);

    return fetch(path, this.option)
        .then(response => response.text())
        .then(result => JSON.parse(result))
  }
}