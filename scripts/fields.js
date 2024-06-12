import yaml from 'js-yaml'
import fs from 'fs'

const obj = yaml.load(fs.readFileSync('fields.yaml', { encoding: 'utf-8' }))
const openfda = obj.properties.openfda
let openFdaDescriptionMap = {}

Object.keys(openfda.properties).forEach(
  (k) => (openFdaDescriptionMap[k] = openfda.properties[k].items.description)
)

fs.writeFileSync(
  'src/lib/helpers/openFdaDescriptionMap.json',
  JSON.stringify(openFdaDescriptionMap, null, 2)
)
