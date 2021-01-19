var express = require('express');
var router = express.Router();

/* Route for fetch hiscores */
router.get('/:id', async function(req, res, next) {
  // const sql = "SELECT * FROM hiscore ORDER BY score DESC LIMIT 10";

  // try {
  //   const result = await query(sql);
    
  //   res.json({
  //     status: 200,
  //     result
  //   });
  // }
  // catch(e) {
  //   next(e);
  //   console.error(e);
  // }

      res.json({
        status: 200,
        id: req.params.id
      });
});

/* Route for posting hiscore */
router.post('/', async function(req, res, next) {

  /*
  * game id
  * score
  * handle
  */

  // const sql = "INSERT INTO hiscore (score, name) VALUES (?, ?)";

  const score = parseInt(req.body.score);
  const name = req.body.name;
  const id = parseInt(req.body.id);

  console.log(score, name, id);

  // try {
  //   await query(sql, score, name);
    
  //   res.json({
  //     status: 200,
  //     msg: name + ' score of ' + score + ' posted.'
  //   });
  // }
  // catch(e) {
  //   next(e);
  //   console.error(e);
  // }
    res.json({
      status: 200,
      msg: 'game: ' + id + ', handle: ' + name + ', score: ' + score
    });
});
module.exports = router;
