def viewGenerator(object):
  path = "./forms/" +  object.name + "form.js"
  form = open(path,"w")
  form.write("test")