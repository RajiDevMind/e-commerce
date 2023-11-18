const notFound = (req, res) =>
  res.status(404).send("<h1>Route u're searching, does not exist!!!</h1>");

module.exports = notFound;
