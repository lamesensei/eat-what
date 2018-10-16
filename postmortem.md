## Project Post Mortem

Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

[https://github.com/danluu/post-mortems](https://github.com/danluu/post-mortems)
https://blog.codinghorror.com/the-project-postmortem/

### What to Bring

Please answer the following questions. Take at least 30 minutes to prepare.

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?
   **Focus more on a single core feature even if meant forgoing 'basic' deliverables like database/crud. Deciding to forgo prior assignment's furthers have greatly impeded progress for the project - will attempt all furthers from now on.**

2) What in my process and approach to this project went well that I would repeat next time?
   **Usage of trello/kanban boards to break down features into smaller components & pomodoro method for focus.**

--

#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?

**Multiple functions doing similar things with only minor static changes. (need to make dynamic)**

```javascript
const fave = (params, callback) => {
  const statement = `INSERT
    INTO fave (user_id, food_id) 
    VALUES ($1,$2) RETURNING *`;

  const values = [params.userid, params.foodid];

  pool.query(statement, values, (err, result) => {
    callback(err, result);
  });
};

const faveList = (params, callback) => {
  const statement = `SELECT *
    FROM food 
    INNER JOIN fave ON (food.id = fave.food_id)
    WHERE fave.user_id = ($1)`;

  const values = [params];

  pool.query(statement, values, (err, result) => {
    callback(err, result);
  });
};

const faveJson = (params, callback) => {
  const statement = `SELECT *
    FROM food 
    INNER JOIN fave ON (food.id = fave.food_id)
    WHERE fave.user_id = ($1)`;

  const values = [params];

  pool.query(statement, values, (err, result) => {
    callback(err, result);
  });
};
```

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

**I think my routes.js is pretty clean.**

```javascript
let user = require('./controllers/user');
let food = require('./controllers/food');

module.exports = (app, db) => {
  user = user(db);
  app.get('/users/new', user.newForm);
  app.get('/users/login', user.loginForm);
  app.post('/users', user.create);
  app.post('/users/login', user.login);
  app.post('/users/logout', user.logout);

  food = food(db, user);
  app.get('/food/eat', food.eat);
  app.get('/food/curate', food.curate);
  app.get('/food/solo', food.solo);
  app.get('/food/add', food.addForm);
  app.get('/food/edit', food.editList);
  app.get('/food/:id/edit', food.editForm);
  app.get('/food/fave', food.faveList);
  app.get('/food/fave.json', food.faveJson);
  app.get('/food.json', food.listJson);
  app.get('/food', food.list);
  app.post('/food', food.create);
  app.post('/food/:id/fave', food.fave);
  app.put('/food/:id/edit', food.edit);
  app.delete('/food/:id/delete', food.remove);
  app.delete('/food/:id/fave/delete', food.faveRemove);
};
```

For each, please include code examples.

1. Code snippet up to 20 lines.
2. Code design documents or architecture drawings / diagrams.

#### WDI Unit 2 Post Mortem

1. What habits did I use during this unit that helped me?
   **Trello/Pomodoro**
2. What habits did I have during this unit that I can improve on?
   **Giving up on core functions 'just because' of 'x' reason**
3. How is the overall level of the course during this unit? (instruction, course materials, etc.)
   **Fair, most learning achieved during self-study and disovery. Gitbook could use some corrections (yarn etc)**
