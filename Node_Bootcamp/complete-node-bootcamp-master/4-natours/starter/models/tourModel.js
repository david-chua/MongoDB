const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // validator - used for validating a schema
    unique: true,
    trim: true
  },
  slug: String,
  duration:{
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have an image cover']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date]
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);

tourSchema.virtual('durationWeeks').get(function(){
  return this.duration / 7
});


// DOCUMENT MIDDLEWARE, runs before save() and the .create()
tourSchema.pre('save', function(next){
  this.slug = slugify(this.name, { lower: true });
  next();
})

// tourSchema.pre('save', function(next){
//   console.log('Will save document ...');
//   next();
// })
// tourSchema.post('save', function(doc, next){
//   console.log(doc);
//   next();
// })

// tourSchema.pre('find', function(next){
//   this.find({ secretTour: {$ne: true } })
//   next()
// });

tourSchema.pre(/^find/, function(next){
  this.find({secretTour: {$ne: true } })
  this.start = Date.now()
  next();
})

tourSchema.post(/^find/, function(docs, next){
  console.log(`Query took: ${Date.now() - this.start} milliseconds`);
  console.log(docs);
  next();
})
// Possible way
// tourSchema.pre('findOne', function(next){
//   this.find({ secretTour: {$ne: true } })
//   next()
// });

const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour({
//   name: 'The Park Camper',
//   price: 997
// });
//
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   })
module.exports = Tour;
