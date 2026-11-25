// Field work filters
(function () {
  const buttons = document.querySelectorAll('.filters button');
  const cases = document.querySelectorAll('#cases .case');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      cases.forEach((card) => {
        const tags = card.dataset.tags.split('|');
        card.hidden = !(filter === 'All' || tags.includes(filter));
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
