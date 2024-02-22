const asyncHandler = (requestHandler) =>{
  return  (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => (err))
    }
}
export {asyncHandler}



// asyncHandler.js
/*
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next); // Forward error to Express's error handling middleware
    };
};

export { asyncHandler };
*/




//const asyncHandler = () =>{}
//const asyncHandler = (func) => () =>{}
//const asyncHandler = (func) => async() =>{}

/*const asyncHandler = (fn) => async (req, res, next) => {
   try{
await fn(req, res, next)
    }
    catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: error.message
        })
    }
}*/