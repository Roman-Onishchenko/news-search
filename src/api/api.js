import { Map, List } from 'immutable';

export default class Api {

  constructor() {
    this.fetchNews = this.fetchNews.bind(this);
  }

  fetchNews() {
    return new Promise((resolve, reject) => {
      const url = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=23c4065645124c6ab598cd7d04086961';

      fetch(url).then((response) => {
         return response.json();
       }).then((data) => {
        const news = new List(data.articles);
        resolve(news);
      })
      .catch((error) => ({
        error: 'Ошибка',
      }));
    });
  }
}
