#!/usr/bin/python

GRAPHQL_TYPES = ["String", "Int", "Float", "DateTime", "ID", "Boolean"]

def queryGenerator(object, objects, enums):
  name = objectToQueryName(object)
  path = "./queries/" + name + ".queries.js"
  queryFile = open(path, "w")
  parents = [object.name]

  wl(queryFile, 0, "import gql from 'graphql-tag';")
  wl(queryFile, 0, '')
  wl(queryFile, 0, "export const GET_" + name.upper() + " = gql`")
  wl(queryFile, 1, "{")
  wl(queryFile, 2, name + " {")
  objectQuery(queryFile, object, objects, enums, 0, parents)
  wl(queryFile, 2, "}")
  wl(queryFile, 1, "}")
  wl(queryFile, 0, "`;")

def objectQuery(queryFile, object, objects, enums, depth, parents):
  objects_names = list(map(lambda o: o.name, objects))
  enums_names = list(map(lambda e: e.name, enums))
  for member in object.memberVariables:
    if member.typeVariable in GRAPHQL_TYPES or member.typeVariable in enums_names:
      wl(queryFile, 3 + depth, member.name)
    elif member.typeVariable in objects_names:
      if member.typeVariable not in parents:
        inerObj = next((o for o in objects if o.name == member.typeVariable), None)
        parents.append(inerObj.name)
        wl(queryFile, 3 + depth, objectToQueryName(inerObj) + " {")
        objectQuery(queryFile, inerObj, objects, enums, depth + 1, parents)
        wl(queryFile, 3 + depth, "}")
    else:
      print(member.typeVariable)
      print("~~~ERROR~~~")

def objectToQueryName(object):
  return object.name.lower() if object.name[-1:] == 's' else object.name.lower() + "s"

def wl(queryFile,indent, line):
  queryFile.write(" " * indent * 2 + line + "\n")