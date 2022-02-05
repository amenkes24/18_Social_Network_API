const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Set up Get all and Post at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up Get one, PUT, and DELETE at api/thoughts/:id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up reactions 
router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;