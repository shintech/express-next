const faker = require('faker')

const format = ({ title, data }) => ({
  title: `${title.charAt(0).toUpperCase()}${title.slice(1)}!!`,
  data
})

module.exports = {
  fetch: (req, res) => {
    res.status(200).json(
      format({
        data: faker.company.bs(),
        title: faker.company.bsBuzz()
      })
    )
  }
}
