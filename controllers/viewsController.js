/* eslint-disable prettier/prettier */
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  // get all tour data from collection
  const tours = await Tour.find();
  // build template

  // render the template using tour data from the collection
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'Tour details'
  });
};
