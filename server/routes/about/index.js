const faker = require('faker')

const format = function (json) {
  const { title, data } = json

  let newTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}!!`

  return {
    title: newTitle,
    data
  }
}

module.exports = {
  fetch: (req, res) => {
    const formatted = format({
      data: faker.company.bs(),
      title: faker.company.bsBuzz()
    })

    res.status(200).json(formatted)
  }
}
