const asynchandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((e)=>{
    console.log("promise rejected",e);
    next(e);
  }); 
}
export default asynchandler;