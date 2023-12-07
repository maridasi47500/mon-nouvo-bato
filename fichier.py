from os import listdir
from os.path import isfile, join
class Fichier:
  def __init__(self,path="./mespages",name=""):
    self.path=path
    self.name=name

  def listeProgrammes(self):
    return [f for f in listdir(self.path) if isfile(join(self.path, f))]
  def lire(self):
    print(self.path+"/"+self.name)
    j=open(self.path+"/"+self.name, "r")
    return j.read()
  def lirefichier(self):
    print(self.path+"/"+self.name)
    j=open(self.path+"/"+self.name, "rb")
    return j.read()
  def ecrire(self,content):
    fichier = open(self.path+"/"+self.name, "a")
    fichier.write(content)
    fichier.close()
