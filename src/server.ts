import app from './app'
import config from 'config'
import Debug from 'debug'
const startupDebugger = Debug('startup')

const port = process.env.PORT || 3000
app.listen(port, () => {
  startupDebugger(`Listening on port ${port}...`, config.get('name'), 'Node_ENV:', process.env.Node_ENV)
})
