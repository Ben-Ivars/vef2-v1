export function makeHTML(entry, dataTitle) {
  const template = `
    <section>
      <h1>Data ${dataTitle}</h1>
      ${entry}
    </section>
  `;
  return template;

}

export function makeIndex() {
  return `<!DOCTYPE html >
    <html>
      <head>
        <title>Gagnavinnsla</title>
      </head>
      <body>
        <p>Here we have some text <strong>BOLD</strong> and it should show up</p>
      </body>
    </html>`;
}

/**
 * Takes HTML for a single blog entry and returns it with the site template.
 */
export function blogTemplate(title, content, showBack = false) {
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
