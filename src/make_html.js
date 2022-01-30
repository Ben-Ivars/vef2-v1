export function makeHTML(entry, datanum, rawData) {
  const template = `
  <div class="gogn-raw">
  <div class="gogn">
    <content>
      <section>
        <h2><span>Numerical analysis</span></h2>
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
    </content>
    <p><a href="/">Til baka</a></p>
  </div>
  <div class="raw">
    <h1>Gögn [Dataset ${datanum}]: </h1>
    <p>
      [${rawData}]
    </p>
  </div>
</div>`;
  return template;

}

export function makeIndex(entries) {
  let list = '';
  for (const entry of entries) {
    // const link = `<li><a href="${`dataset_${entry}.html`}">Dataset ${entry}</a></li>`;
    const link = `<section>
    <a href="dataset_${entry}.html">
      <h2><span>Dataset ${entry}</span></h2>
    <ul>
      <li>
        <h3>Töluleg greining á gögnum</h3>
        <div class="image">
        <img src="images/nums.jpg" alt="">
      </div>
      </li>
    </ul>
    </a>
  </section>`;
    list += link;
  }
  // return `<ul>${list}</ul>`;
  return `<div class="categories">
    ${list}
  </div>`
}

/**
 * Takes HTML for a single entry and returns it with the site template.
 */
export function entryTemplate(title, content, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title ?? ''}</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
      ${content ?? ''}
      ${back}
    </div>

  </body>
  </html>`;
}
