#!/usr/bin/python

class MemberVariable:
  def __init__(self, name, typeVariable, obligatory):
    self.name = name
    self.typeVariable = typeVariable
    self.obligatory = obligatory
  def __str__(self):
    return "name: " + self.name + " | typeVariable: " + self.typeVariable +" | obligatory: " + self.obligatory.__str__()

class ObjectFile:
  def __init__(self):
    self.name = ""
    self.memberVariables = []
  def __str__(self):
    strPrint = "OBJECT: \n name: " + self.name + "\n memberVariable:"
    for member in self.memberVariables:
      strPrint += "\n" + "  - " + member.__str__()
    return strPrint

class EnumFile: 
  def __init__(self):
    self.name = ""
    self.values = []
  def __str__(self):
    strPrint = "ENUM: \n name: " + self.name + "\n values:"
    for val in self.values:
      strPrint += "\n" + "  - " + val
    return strPrint


def generateDatastructre(model):
  lines = model.readlines()
  lines = [line.strip() for line in lines]
  
  #init var
  ## objects
  objects = []
  currentObj = ObjectFile()
  objInCreation = False
  ## enums
  enums = []
  currentEnum = EnumFile()
  enumInCreation = False

  # parse file
  for line in lines:
    firstWord = line.split(' ')[0]
    secondWord = "rien"
    if(len(line.split(' ')) > 1):
      secondWord = line.split(' ')[1]
    #print(firstWord + " " + secondWord)
    if firstWord == "type":
      objInCreation = True
      currentObj.name = secondWord
    elif firstWord == "enum":
      enumInCreation = True
      currentEnum.name = secondWord
    # end of creation
    elif firstWord == "}":
      if objInCreation:
        objInCreation = False
        objects.append(currentObj)
        currentObj = ObjectFile()
      elif enumInCreation:
        enumInCreation = False
        enums.append(currentEnum)
        currentEnum = EnumFile()
      else:
        print("Error closing nothing...")
    else:
      if objInCreation:
        isObligatory = "!" in secondWord
        if isObligatory:
          secondWord = secondWord.replace("!", "")
        firstWord = firstWord.replace(":","")
        currentObj.memberVariables.append(MemberVariable(firstWord, secondWord, isObligatory))
      elif enumInCreation:
        currentEnum.values.append(firstWord)
  #printResult(objects, enums)
  return objects, enums

def printResult(objects, enums):
  for obj in objects:
    print(obj)
  for enu in enums:
    print(enu)