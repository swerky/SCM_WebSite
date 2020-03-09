#!/usr/bin/python

import sys
from generateDatastructure import generateDatastructre, printResult
from viewGenerator import viewGenerator
# test if the user give the path to a prisma model
if len(sys.argv) != 2:
  print("please give the path to your prisma model")
  sys.exit()

# get path from parameters
path = sys.argv[1]

# open file
model = open(path,"r")

# Generate datastructure
objects, enums = generateDatastructre(model)

printResult(objects, enums)

for obj in objects:
  viewGenerator(obj)
