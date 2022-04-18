let my_name: string = 'Shibata Hiroki'

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

interface Person {
  name: string
  age: number
}

const getName = (person: Person) => {
  return person.name
}
const getAge = (person: Person) => {
  return person.age
}