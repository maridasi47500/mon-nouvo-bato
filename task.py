# coding=utf-8
import sqlite3
import sys
import re
from model import Model
class Task(Model):
    def __init__(self):
        self.con=sqlite3.connect(self.mydb)
        self.con.row_factory = sqlite3.Row
        self.cur=self.con.cursor()
        self.cur.execute("""create table if not exists task(
        id integer primary key autoincrement,
        title text,
            content text
                    );""")
        self.con.commit()
        myhashs=[{"title":"musique","content":"ecris une page avec les chansons que tu aimes écouter"},{"title":"ecris une animation css","content":"ecris un page html, fais des images transparentes et fais une animation css"}]
        for myhash in myhashs:
          self.cur.execute("insert or ignore into task (title,content) values (:title,:content)",myhash)
          self.con.commit()
        #self.con.close()
    def getall(self):
        self.cur.execute("select * from task")

        row=self.cur.fetchall()
        return row
    def deletebyid(self,myid):

        self.cur.execute("delete from task where id = ?",(myid,))
        job=self.cur.fetchall()
        self.con.commit()
        return None
    def getbyid(self,myid):
        self.cur.execute("select * from task where id = ?",(myid,))
        row=dict(self.cur.fetchone())
        print(row["id"], "row id")
        job=self.cur.fetchall()
        return row
    def create(self,params):
        print("ok")
        myhash={}
        for x in params:
            if 'confirmation' in x:
                continue
            if 'envoyer' in x:
                continue
            if '[' not in x and x not in ['routeparams']:
                #print("my params",x,params[x])
                try:
                  myhash[x]=str(params[x].decode())
                except:
                  myhash[x]=str(params[x])
        print("M Y H A S H")
        print(myhash,myhash.keys())
        myid=None
        try:
          self.cur.execute("insert into task (title,content) values (:title,:content)",myhash)
          self.con.commit()
          myid=str(self.cur.lastrowid)
        except Exception as e:
          print("my error"+str(e))
        azerty={}
        azerty["task_id"]=myid
        azerty["notice"]="votre task a été ajouté"
        return azerty




