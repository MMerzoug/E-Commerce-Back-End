const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
        // req.body, req.params, req.query .com/hello?name=asdasd
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create (req.body) 
    res.status(200).json({message:'Your category has been created successfully'});
  } catch (err) {
    res.status(400).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(
      req.body, 
      {
        where: {
          id: req.params.id,
        },
      }
    ) 
    res.status(200).json({message: 'Category updated successfully'});
  }catch(err){
    res.status (500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy ({
      where: {
        id: req.params.id,
      },
    });

    if(!category){
      res.status(400).json({message: 'There is no category with that ID.'});
    }
    res.status(200).json({message: 'The category has been deleted.'});
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
