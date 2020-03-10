#!/usr/bin/python

import sys
from pathlib import Path
from generateDatastructure import generateDatastructre, printResult
from viewGenerator import viewGenerator
from queryGenerator import queryGenerator
from formGenerator import formGenerator

# test if the user give the path to a prisma model
if len(sys.argv) != 2:
  print("please give the path to your prisma models (ex: ../server/models/")
  sys.exit()

# var
objects = []
enums = []


# get path from parameters
path = sys.argv[1]

for path in Path(path).iterdir():
  if path.is_file():
    # open file
    model = open(path,"r")
    # Generate datastructure
    objectsModel, enumsModel = generateDatastructre(model)
    objects += objectsModel
    enums += enumsModel

printResult(objects, enums)

for obj in objects:
  queryGenerator(obj, objects, enums)
  viewGenerator(obj, enums)
  formGenerator(obj, objects, enums)

