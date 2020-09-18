


const db = require('../db/db');
const HotDog = db.hotdog;
const asyncHandler = require ('../middleware/asyncHandler');
const ErrorResponse = require ('../middleware/Error');


console.log(HotDog);


//getting list from db
exports.getXs = asyncHandler( async(ctx, next)=> {
	ctx.body  = await HotDog.findAll();
	ctx.response.status(200);


	next();
});

//getting single entry from db
exports.getX = asyncHandler( async(ctx, next)=> {
	ctx.body = await HotDog.findOne({ where: {id: ctx.params.id}});
	if(!entry){
            //if formatted id but not in DB
          return  next(new ErrorResponse(`entry not found with id of ${ctx.params.id}`, 404));
        }            
 	ctx.response.status(200);
	next();
});

//create entry in db
exports.createX =asyncHandler( async(ctx, next)=> {
	ctx.body = await HotDog.create(ctx.request.body);
        ctx.response.status(201);


	next();
});


//update entry in db
exports.updateX = asyncHandler( async(ctx, next)=> {
	console.log(ctx.request.body);
	ctx.body  = await HotDog.update( ctx.request.body, {where:{id:ctx.params.id} });
 	if (!id) {
            //if formatted id but not in DB
          return  next(new ErrorResponse(`entry not found with id of ${ctx.params.id}`, 404));
 	}
 	ctx.response.status(200);

	next();
});

//delete entry in db
exports.deleteX = asyncHandler( async(ctx, next)=> {
	ctx.body = await HotDog.destroy({ where: {id: ctx.params.id}});

	if (!entry) {
            //if formatted id but not in DB
          return  next(new ErrorResponse(`entry not found with id of ${ctx.params.id}`, 404));
        }            
 	ctx.response.status(200);
	next();
});



