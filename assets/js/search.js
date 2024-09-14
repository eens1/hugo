(function() {
  function displaySearchResults(results, store) {
    const searchResults = document.getElementById('results');
    if (results.length) {
      let output = '';
      results.forEach(function(result) {
        const item = store[result.ref];
        output += '<li><a href="' + item.url + '">' + item.title + '</a></li>';
      });
      searchResults.innerHTML = output;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  const searchTerm = getQueryVariable('query');
  if (searchTerm) {
    document.getElementById('search-input').setAttribute("value", searchTerm);
    const idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
      for (let key in window.store) {
        this.add({
          'id': key,
          'title': window.store[key].title,
          'content': window.store[key].content
        });
      }
    });

    const results = idx.search(searchTerm);
    displaySearchResults(results, window.store);
  }
})();
