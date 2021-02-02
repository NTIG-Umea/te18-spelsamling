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

## Exempel

Kolla implementeringen i public/games/exempel

## Mysql

mysql> describe hiscore;
+--------+-----------------+------+-----+---------+----------------+
| Field  | Type            | Null | Key | Default | Extra          |
+--------+-----------------+------+-----+---------+----------------+
| id     | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| gameid | int unsigned    | NO   |     | NULL    |                |
| name   | varchar(10)     | NO   |     | NULL    |                |
| score  | int             | NO   |     | NULL    |                |
+--------+-----------------+------+-----+---------+----------------+

mysql>describe teams;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int unsigned | NO   | PRI | NULL    | auto_increment |
| name    | varchar(200) | YES  |     | NULL    |                |
| desc    | text         | YES  |     | NULL    |                |
| members | text         | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+

[SQLdump](te18games.sql)