// search.js - Handles search box creation and search functionality

document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  if (!searchBox) return;
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search-input';
  input.placeholder = 'Search...';
  const results = document.createElement('ul');
  results.id = 'results-container';
  searchBox.appendChild(input);
  searchBox.appendChild(results);

  if (typeof SimpleJekyllSearch !== 'undefined') {
    SimpleJekyllSearch({
      searchInput: input,
      resultsContainer: results,
      json: '/search.json',
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
      noResultsText: 'No results found',
      limit: 10,
      fuzzy: false,
    });
  }
});
