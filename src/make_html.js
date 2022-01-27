export function makeHTML(entry, dataTitle) {
  const template = `
    <section>
      <h1>Data ${dataTitle}</h1>
      <ul>
        <li><strong>Variance: </strong>${entry.variance}</li>
        <li><strong>Max: </strong>${entry.max}</li>
        <li><strong>Mean: </strong>${entry.mean}</li>
        <li><strong>Median: </strong>${entry.median}</li>
        <li><strong>Min: </strong>${entry.min}</li>
        <li><strong>Standard deviation: </strong>${entry.stddev}</li>
        <li><strong>Sum: </strong>${entry.sum}</li>
        <li><strong>Range: </strong>${entry.range}</li>
      </ul>
    </section>
  `;
  return template;

}

export function makeIndex(entries) {
  let list = '';
  for (const entry of entries) {
    const link = `<li><a href="${`dataset_${entry}.html`}">Dataset ${entry}</a></li>`;
    list += link;
  }
  return `<ul>${list}</ul>`;
}

/**
 * Takes HTML for a single entry and returns it with the site template.
 */
export function entryTemplate(title, content, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${content ?? ''}
      ${back}
    </body>
  </html>`;
}
