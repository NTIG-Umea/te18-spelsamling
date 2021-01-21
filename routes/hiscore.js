const express = require('express');
const router = express.Router();
const { query } = require('../models/db');

/* Route for fetch hiscores */
router.get('/:id', async function(req, res, next) {
  const sql = `
    SELECT * FROM hiscore
    WHERE gameid = ?
    ORDER BY score 
    DESC LIMIT 10`;

  const gameId = req.params.id;

  try {
    const result = await query(sql, gameId);
    
    res.json({
      status: 200,
      result
    });
  }
  catch(e) {
    next(e);
    console.error(e);
  }
      // res.json({
      //   status: 200,
      //   id: req.params.id
      // });
});

/* Route for posting hiscore */
router.post('/', async function(req, res, next) {

  const sql = `
    INSERT INTO hiscore (gameid, name, score) 
    VALUES (?, ?, ?)`;

  const score = parseInt(req.body.score);
  const name = req.body.name;
  const gameId = parseInt(req.body.id);

  console.log(score, name, gameId);

  try {
    await query(sql, gameId, name, score);
    
    res.json({
      status: 200,
      msg: name + ' score of ' + score + ' posted to ' + gameId
    });
  }
  catch(e) {
    next(e);
    console.error(e);
  }
    // res.json({
    //   status: 200,
    //   msg: 'game: ' + id + ', handle: ' + name + ', score: ' + score
    // });
});
module.exports = router;
