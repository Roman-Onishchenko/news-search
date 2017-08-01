describe('api', () => {
  it('should fetch data from an external database', async () => {
    const source = "the-economist";
    await expect(fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=23c4065645124c6ab598cd7d04086961`)).resolves.toBeTruthy();
  });
});

// describe('api', () => {
//   it('should display an error after fetch wrong data', async () => {
//     const source = "thee-economist";
//     await expect(fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=23c4065645124c6ab598cd7d04086961`)).rejects.toBeEqual('error');
//   });
// });
