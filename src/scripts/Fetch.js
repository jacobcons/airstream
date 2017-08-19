class Fetch {
  async get(url) {
    return await(await fetch(url)).json();
  }
}

module.exports = new Fetch();
