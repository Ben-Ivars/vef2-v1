import { describe, expect, it } from '@jest/globals';
import { makeHTML, makeIndex, entryTemplate } from '../src/make_html.js';

describe('Generates HTML for numerical analysis', () => {
  it('can handle normal input', () => {
    const entry = {
      variance: 1,
      max: 2,
      mean: 3,
      median: 4,
      min: 5,
      stddev: 6,
      sum: 7,
      range: 8,
    }
    const datanum = '1'
    const rawData = '1,2,3,4,5'

    const html = makeHTML(entry, datanum, rawData);
    expect(html).toEqual(`
  <div class="gogn-raw">
  <div class="gogn">
    <content>
      <section>
        <h2><span>Numerical analysis</span></h2>
        <ul>
          <li><strong>Variance: </strong> 1</li>
          <li><strong>Max: </strong> 2</li>
          <li><strong>Mean: </strong> 3</li>
          <li><strong>Median: </strong> 4</li>
          <li><strong>Min: </strong> 5</li>
          <li><strong>Standard deviation: </strong> 6</li>
          <li><strong>Sum: </strong> 7</li>
          <li><strong>Range: </strong> 8</li>
        </ul>
      </section>
    </content>
    <p><a href="/">Til baka</a></p>
  </div>
  <div class="raw">
    <h1>Parsed data from [1.txt]: </h1>
    <p>
      [1,2,3,4,5]
    </p>
  </div>
</div>`);
  });
  it('can handle empty raw data', () => {
    const entry = {
      variance: 1,
      max: 2,
      mean: 3,
      median: 4,
      min: 5,
      stddev: 6,
      sum: 7,
      range: 8,
    }
    const datanum = '1'

    const html = makeHTML(entry, datanum);
    expect(html).toEqual(`
  <div class="gogn-raw">
  <div class="gogn">
    <content>
      <section>
        <h2><span>Numerical analysis</span></h2>
        <ul>
          <li><strong>Variance: </strong> 1</li>
          <li><strong>Max: </strong> 2</li>
          <li><strong>Mean: </strong> 3</li>
          <li><strong>Median: </strong> 4</li>
          <li><strong>Min: </strong> 5</li>
          <li><strong>Standard deviation: </strong> 6</li>
          <li><strong>Sum: </strong> 7</li>
          <li><strong>Range: </strong> 8</li>
        </ul>
      </section>
    </content>
    <p><a href="/">Til baka</a></p>
  </div>
  <div class="raw">
    <h1>Parsed data from [1.txt]: </h1>
    <p>
      []
    </p>
  </div>
</div>`);
  });
});

describe('Generates HTML for entry on index page', () => {
  it('can handle 1 entry', () => {
    const input = ['1'];

    const html = makeIndex(input);
    expect(html).toEqual(`<div class="categories">
    <section>
    <a href="dataset_1.html">
      <h2><span>Dataset 1</span></h2>
    <ul>
      <li>
        <h3>Numerical analysis on data</h3>
        <div class="image">
        <img src="nums.jpg" alt="">
      </div>
      </li>
    </ul>
    </a>
  </section>
  </div>`);
  });

  it('can handle multiple entry', () => {
    const input = ['1', '2', '3'];

    const html = makeIndex(input);
    expect(html).toEqual(`<div class="categories">
    <section>
    <a href="dataset_1.html">
      <h2><span>Dataset 1</span></h2>
    <ul>
      <li>
        <h3>Numerical analysis on data</h3>
        <div class="image">
        <img src="nums.jpg" alt="">
      </div>
      </li>
    </ul>
    </a>
  </section><section>
    <a href="dataset_2.html">
      <h2><span>Dataset 2</span></h2>
    <ul>
      <li>
        <h3>Numerical analysis on data</h3>
        <div class="image">
        <img src="nums.jpg" alt="">
      </div>
      </li>
    </ul>
    </a>
  </section><section>
    <a href="dataset_3.html">
      <h2><span>Dataset 3</span></h2>
    <ul>
      <li>
        <h3>Numerical analysis on data</h3>
        <div class="image">
        <img src="nums.jpg" alt="">
      </div>
      </li>
    </ul>
    </a>
  </section>
  </div>`);
  });
});

describe('Generates HTML page with content', () => {
  it('can handle normal input', () => {
    const title = 'TEST'
    const content = '<p>CONTENT</p>'
    const showBack = true
    const html = entryTemplate(title, content, showBack);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEST</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p>CONTENT</p>
        <p><a href="/">Til baka</a></p>
      </main>
  </body>
  </html>`);
  });
  it('can handle no title', () => {
    const title = undefined;
    const content = '<p>CONTENT</p>';
    const html = entryTemplate(title, content, true);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p>CONTENT</p>
        <p><a href="/">Til baka</a></p>
      </main>
  </body>
  </html>`);
  });
  it('can handle no content', () => {
    const title = 'TEST';
    const content = undefined;
    const html = entryTemplate(title, content, true);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEST</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p></p>
        <p><a href="/">Til baka</a></p>
      </main>
  </body>
  </html>`);
  });
  it('can handle no back', () => {
    const title = 'TEST';
    const content = '<p>CONTENT</p>';
    const html = entryTemplate(title, content, false);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEST</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p>CONTENT</p>
        <p></p>
      </main>
  </body>
  </html>`);
  });
  it('can handle no back, title or content', () => {
    const title = undefined;
    const content = undefined;
    const html = entryTemplate(title, content, false);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p></p>
        <p></p>
      </main>
  </body>
  </html>`);
  });
  it('defaults to showBack = false', () => {
    const title = 'TEST'
    const content = '<p>CONTENT</p>'
    const html = entryTemplate(title, content);
    expect(html).toEqual(`<!doctype html>
  <html lang="is">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEST</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <header>
        <h1>Gagnavinnsla</h1>
        <span>Verkefni 1 - Benedikt Aron Ívarsson</span>
      </header>
      <main>
        <p>CONTENT</p>
        <p></p>
      </main>
  </body>
  </html>`);
  });
});
