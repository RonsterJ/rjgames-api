const db = require('../models');

const index = (req, res) => {
  db.Article.find({}, (err, foundArticles) => {
    if (err) console.log('Error in articles#index:', err);
    res.status(200).json(foundArticles);
  });
};

const show = (req, res) => {
  db.Article.findById(req.params.id, (err, foundArticle) => {
    if (err) console.log('Error in articles#show:', err);

    res.status(200).send(foundArticle);
  });
};

const create = (req, res) => {
  db.Article.create(req.body, (err, savedArticle) => {
    if (err) console.log('Error in articles#create:', err);

    res.status(200).json(savedArticle);
  });
};

const update = (req, res) => {
  db.Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle) => {
    if (err) console.log('Error in articles#update:', err);

    if (!updatedArticle) {
      res.status(400).json({message: `Could not find the article with id ${req.params.id}`});
    }

    res.json(updatedArticle);
  });
};

const destroy = (req, res) => {
  db.Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    if (err) console.log('Error in article#destroy:', err);

    res.status(200).json(deletedArticle);
  });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};