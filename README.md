## Indice:

- [Il Porgetto](#il-progetto)
- [Di cosa si tratta](#di-cosa-si-tratta)
- [Come funziona](#come-funziona)
- [Link al sito](#come-provarlo)
- [Strumenti utilizzati](#strumenti-utilizzati)

## Il progetto:

Il secondo progetto per JavaScript proposto dai coach di Start2Impact si concentra sulle chiamate ad API esterne tramite JavaScript.

Il progetto si occupa di chiedere e restituire le ultime storie/articoli di [Hackers News](https://news.ycombinator.com).

## Di cosa si tratta

I motivi sono diversi, quelli che ritengo più importanti sono:

- Usare una libreria JavaScript per la prima volta
- Usare un Builder (webpack in questo caso) per la prima volta
  - Impostare il suo file di configurazione

## Come funziona

Il sito è molto semplice: effettuata la prima chiamata alle API in questione, si ottiene un array di IDs, da questi si ottine la corrispondente notizia che viene inserita dinamicamente nella struttura HTML.

![Schema funzionamento sito](./src/img/Schema%20sito%20Hackers%20News.png)

## Come provarlo?

Basterà collegarti a **[questo sito](https://ilpiova-s2i-hackersnewsproject.netlify.app)** e iniziare a leggere quanto vuoi.

## Strumenti utilizzati:

- HTML
- CSS
- JAVASCRIPT
  - AXIOS
- Webpack
