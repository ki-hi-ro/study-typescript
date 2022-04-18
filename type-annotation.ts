let my_name = 'Shibata Hiroki'
console.log(my_name.toLowerCase());

const empty_name: string = ""

const firstName: string = 'Hiroki'
const lastName: string = 'Shibata'
const fullName: string = `${firstName} ${lastName}`

console.log(my_name)
console.log(fullName)

const isOpen: boolean = true
const disabled: boolean = false

const list: number[] = [1, 2, 3]
list.push(4)
console.log(list)

const sayHello: (name: string) => string = (name: string): string => {
  return `Hello, ${name}!`
}
console.log(sayHello('shibata'))

const person: {
  name: string
  age: number
} = {
  name: 'Shibata',
  age: 28
}
console.log(person.name)

// interface Person {
//   name: string
//   age: number
// }

// const getName = (person: Person) => {
//   return person.name
// }
// const getAge = (person: Person) => {
//   return person.age
// }

let my_name_second = 'Shibata Hiroki'

my_name_second.toUpperCase()

// const ageList = [30, 40, 50]
// ageList[0].toUpperCase()

const sayHello_second = (name: string): string => {
  return `Hello, ${name}!`
}

// const val1 = sayHello_second('Shibata Hiroki')
// const val2 = sayHello_second(123)

interface Person {
  firstName: string
  lastName: string
  age: number
}

const getFullName = (person: Person) => {
  return `${person.firstName} ${person.lastName}`
}

const largeFullName =
  console.log(getFullName({ firstName: 'Shibata', lastName: 'Hiroki', age: 28 }).toUpperCase())

const myName: 'Shibata Hiroki' = 'Shibata Hiroki'