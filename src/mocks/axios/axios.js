
const generateAxiosMock = ({ jest }) => {
  const axios = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
    head: jest.fn(),
  }
  return axios
}

module.exports = generateAxiosMock
