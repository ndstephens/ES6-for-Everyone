import { uniq } from 'lodash'
import apiKey, { myApiKey as key, url, sayHi, age, cat } from './src/config'
import User, { createUrl, gravatar } from './src/user'

const ages = [1, 1, 4, 3, 5, 1]
console.log(uniq(ages))

console.log(apiKey)
console.log(key)
console.log(url)
sayHi('nate')
console.log(age, cat)

const nate = User('Nate Stephens', 'ndstephens@gmail.com', 'fivefloral.com')
console.log(nate)
const profile = createUrl(nate.name)
console.log(profile)
const image = gravatar('nate.email')
console.log(image)
