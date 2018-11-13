module.exports = {
  fetch: (req, res) => {
    res.status(200).json({
      value: 0,
      message: 'ok'
    })
  }
}
