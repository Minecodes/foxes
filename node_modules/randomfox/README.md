# randomfox

This is an library to get an link to an random fox image.</br>
This is a API and now in TypeScript too. 👍😉 [![CodeFactor](https://www.codefactor.io/repository/github/minecodes/randomfox/badge)](https://www.codefactor.io/repository/github/minecodes/randomfox)

The cli version: [https://www.npmjs.com/package/foxes](https://www.npmjs.com/package/foxes)</br>
How to work with Typescript: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)

## Installation ✅

```
npm i randomfox

or

yarn install randomfox

or

npm i git+https://gitlab.com/Minecodes13/randomfox.git

or

yarn install git+https://gitlab.com/Minecodes13/randomfox.git

or

npm i git+https://github.com/Minecodes/randomfox.git

or

yarn install git+https://github.com/Minecodes/randomfox.git
```

## Docs 🧐🤓
### Javascript
Example

```javascript
const randomfox = require("randomfox");

console.log(fox());
```

Random fox Image

```javascript
const { fox } = require("randomfox");

console.log(fox());
```

Custom fox Images

```javascript
const { customfox } = require("../src/main");

console.log(customfox([
	"https://randomfox.ca/images/1.jpg",
	"https://randomfox.ca/images/2.jpg",
	"https://randomfox.ca/images/3.jpg"]));
```

### Typescript

Example

```typescript
import randomfox from "randomfox";

console.log(randomfox.fox());
```

Random fox image

```typescript
import { fox } from "randomfox";

console.log(fox());
```

Custom fox Images

```typescript
import { customfox } from "randomfox";

console.log(customfox([
	"https://randomfox.ca/images/1.jpg",
	"https://randomfox.ca/images/2.jpg",
	"https://randomfox.ca/images/3.jpg"]));
```
