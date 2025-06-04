# simulateur-publicodes

Simulateur publicodes basé sur le tuto : https://publi.codes/docs/guides/creer-un-simulateur.

## Installation

```sh
yarn install simulateur-publicodes publicodes
```

## Usage

```typescript
import { Engine } from 'publicodes'
import rules from 'simulateur-publicodes'

const engine = new Engine(rules)

console.log(engine.evaluate('salaire net').nodeValue)
// 1957.5

engine.setSituation({ 'salaire brut': 4000 })
console.log(engine.evaluate('salaire net').nodeValue)
// 3120
```

## Development

```sh
// Install the dependencies
yarn install

// Compile the Publicodes rules
yarn run compile



// Run the documentation server
yarn run doc
```
