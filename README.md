# te18-spelsamling

Samlingsrepo för es18-19 och te18s spelprojekt.

## Instruktioner server

Forka.

```bash
git clone din fork

cd te18spelsamling
npm install
```

Se till att mysql är startat.

```bash
sudo service mysql restart
```

Använd sedan tableplus eller mysql klienten.

* Skapa en ny databas, te18games.
* Importera [databasdumpen](public/games/te18games.sql) som ligger i public/games, te18games.sql

I vscode eller bash.

Kopiera .env-example.
Byt namn till .env.
Skriv in dina databasuppgifter.

När detta är gjort så kan du starta upp servern.

```bash
npm start
```

Surfa till localhost:3000, spela en runda(exempelspelet), skriv in en hiscore
Kolla din consol(både npm och i webbläsaren) efter eventuella fel.
Du kan även kolla din XHR request i webbläsaren, titta under network tabben.
Kolla om din databas uppdaterats, din hiscore bör nämligen vara sparad i hiscore tabellen.

Du kan även kontrollera dina hiscore genom att surfa till (localhost:3000/hiscore/1)
Där 1 är spelid.

Gruppernas spelid kommer att vara. Detta ska du använda när du implementerar hiscore klassen
i ditt spel.

1. Bunny Bananas
2. Curly Pirates
3. Diamond Astronauts
4. Furious Fighters
5. Ghost Stars
6. Spicy Unicorns
7. Super Vikings

## Instruktioner i din klient

**Dvs. detta gör du i din grupps spelrepo**

# Instruktioner

Installera Axios

```
npm install axios
```

Inkludera [Hiscore.js](public/games/Hiscore.js) där du behöver anv. det, troligast i din spelscen.

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

Kolla implementeringen i serverrepot, public/games/exempel

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