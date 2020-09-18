const asyncHandler = fn => (ctx, next) => {
	return Promise
		.resolve(fn(ctx, next))
		.catch(next);
};


module.exports =   asyncHandler;	