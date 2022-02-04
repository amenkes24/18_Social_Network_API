const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// Set up Get all and Post at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up Get one, PUT, and DELETE at api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;