# Backend generator
## Goal
The goal of this script is to transform a prisma model (JS librairie for GraphQL) into a react frontend with antd.
## Exemple
### Step 1: Transform the file into a datastructure
```
type User {
  id: ID! @id
  lastName: String!
  firstName: String!
  email: String! @unique
  street: String!
  city: String!
  NPA: Int!
  birthday: DateTime!
  sexe: Sexe
  status: [Status]! @scalarList(strategy: RELATION)
}

enum Sexe {
  MALE
  FEMALE
  OTHER
}

enum Status {
  OJ
  Actif
  Moniteur
  Comite
  Participant # People who come to event like supportive meal
}
```
into
```
objects = [
  {
    name: *string*,
    memberVariable: [
      {
        name: *string*,
        type: *enum*,
        obligatory: *boolean*,
      }
    ]
  }
]

enums = [
  {
    name: *string*,
    values: [*string*,...]
  }
]
```