<<<<<<< HEAD
import { Map, List } from 'immutable';

export default class Api {

  constructor() {
    this.fetchNews = this.fetchNews.bind(this);
  }

  fetchNews(source) {
    return new Promise((resolve, reject) => {
      const url = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=23c4065645124c6ab598cd7d04086961';
      try {
        fetch(url).then((response) => {
           return response.json();
         })
         .then((data) => {
          const news = new List(data.articles);
          resolve(news);
        })
     }
     catch (e) {
       reject(e);
     }
    });
  }
}
=======
import { Map, List } from 'immutable';

export default class Api {

  constructor() {
    this.fetchNews = this.fetchNews.bind(this);
  }

  fetchNews(source) {
    return new Promise((resolve, reject) => {
      const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=23c4065645124c6ab598cd7d04086961`;

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
>>>>>>> 7a6132e15209e102b65d86c8b5dbd403297b218d
