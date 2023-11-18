const { CustomAPIError } = require("../errors/customerror");

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong, try again!" });
};
module.exports = errorHandleMiddleware;
