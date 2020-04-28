import bodyParser from 'body-parser'
import cookieParserCreator from 'cookie-parser'

const bodyParserJson = bodyParser.json()
const cookieParser = cookieParserCreator()

export default {
  bodyParserJson,
  cookieParser,
}
