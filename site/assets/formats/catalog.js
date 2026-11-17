const form = document.querySelector('.catalog-controls');
const search = document.querySelector('#format-search');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#no-results');
const entries = [...document.querySelectorAll('.entry')].map(element => ({
  element,
  text: element.textContent.toLowerCase().replace(/\s+/g, ' '),
}));

function updateIndex() {
  const activeMedia = form.elements.media.value;
  const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let visible = 0;
  for (const { element, text } of entries) {
    const correctMedia = activeMedia === 'all' || activeMedia === element.dataset.media;
    const matches = correctMedia && terms.every(term => text.includes(term));
    element.hidden = !matches;
    visible += Number(matches);
  }
  count.textContent = `${visible} ${visible === 1 ? 'format' : 'formats'}`;
  empty.hidden = visible !== 0;
}

form.addEventListener('input', updateIndex);
form.addEventListener('submit', event => {
  event.preventDefault();
  updateIndex();
});
form.hidden = false;
updateIndex();
