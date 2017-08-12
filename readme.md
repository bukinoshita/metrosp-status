# metrosp-status [![Build Status](https://travis-ci.org/bukinoshita/metrosp-status.svg?branch=master)](https://travis-ci.org/bukinoshita/metrosp-status)

> A real-time API for [MetroSP](http://www.metro.sp.gov.br/) status


## Install

```bash
$ npm install metrosp-status
```


## Usage

```js
const metrospStatus = require('metrosp-status')

metrospStatus().then(lines => console.log(lines))
/*
[
  {
    id: '1b848518-57ba-4659-93bb-aff76790e352',
    cor: '-Azul',
    linha: 'Linha 1-Azul',
    status: 'Normal',
    imagem: '/images/sinal-verde-linha1.gif',
    descricao: '',
    msgStatus: 'Opera&#231;&#227;o Normal',
    codigo: '1'
  },
  ...
]
*/
```


## API

### metrospStatus()

returns a `promise`


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
