/**
 * Creates html template for numerical analysis
 * @param {Object} entry Object containing analysis
 * @param {String} datanum name of file containing data
 * @param {String} rawData Raw data to be shown
 * @returns html template as string
 */
export function makeHTML(entry, datanum, rawData) {
  const template = `
  <div class="gogn-raw">
  <div class="gogn">
    <content>
      <section>
        <h2><span>Numerical analysis</span></h2>
        <ul>
          <li><strong>Variance: </strong> ${entry.variance}</li>
          <li><strong>Max: </strong> ${entry.max}</li>
          <li><strong>Mean: </strong> ${entry.mean}</li>
          <li><strong>Median: </strong> ${entry.median}</li>
          <li><strong>Min: </strong> ${entry.min}</li>
          <li><strong>Standard deviation: </strong> ${entry.stddev}</li>
          <li><strong>Sum: </strong> ${entry.sum}</li>
          <li><strong>Range: </strong> ${entry.range}</li>
        </ul>
      </section>
    </content>
    <p><a href="/">Til baka</a></p>
  </div>
  <div class="raw">
    <h1>Parsed data from [${datanum}.txt]: </h1>
      ${rawData ?? '<p></p>'}
  </div>
</div>`;
  return template;

}
/**
 * Creates html template for section on index page
 * @param {String} entries retruns entries to be shown on Index page
 * @returns html section as string
 */
export function makeIndex(entries) {
  let list = '';
  for (const entry of entries) {
    // const link = `<li><a href="${`dataset_${entry}.html`}">Dataset ${entry}</a></li>`;
    const link = `<section>
    <a href="dataset_${entry}.html">
      <h2><span>Dataset ${entry}</span></h2>
    <ul>
      <li>
        <h3>Numerical analysis on data</h3>
        <div class="image">
        <img src="nums.jpg" alt="">
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
 * Generates html doc with content
 * @param {String} title title of html doc
 * @param {String} content content to display on html page
 * @param {Boolean} showBack if true then show back button
 * @returns HTML document as string
 */
export function entryTemplate(title, content, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '<p></p>';
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
        ${content ?? '<p>[]</p>'}
        ${back}
      </main>
  </body>
  </html>`;
}
/**
 *
 * @param {Array<String>} arr parsed data as array of strings
 * @returns html with 10 items per line
 */
export function rawHelper(arr) {
  const newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, 10))
  }
  let list = ''
  const space = '  '
  for (const lines of newArr) {
    for (const item of lines) {
      list += (item + space);
    }
    list += '<br>';
  }
  const newlist = list.substring(0, list.lastIndexOf('  <br>'));
  return `<p>
    [${newlist}]
  </p>`;
}
