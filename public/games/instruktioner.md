# Instruktioner

Installera Axios

```
npm install axios
```

Inkludera Hiscore.js där du behöver anv. det.

```
  import Hiscore from '../Hiscore.js';
```

## Posta

När du ska posta en score behöver du en url, score, spelid och ett namn.
Detta skickas till postScore metoden.

```
  const hiscore = new Hiscore('http://localhost:3000');

  let name = prompt('Skriv dina initialer: ');

  hiscore.postScore(1, this.score, name);
```

## Hämta

För att hämta alla hiscore för spelet. Du behöver url och spelid.

```
  const hiscore = new Hiscore('http://localhost:3000');

  let score = hiscore.getScore(1);

  console.log(score);
```