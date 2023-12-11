# coding=utf-8
import sqlite3
import sys
import re
from model import Model
class Tip(Model):
    def __init__(self):
        self.con=sqlite3.connect(self.mydb)
        self.con.row_factory = sqlite3.Row
        self.cur=self.con.cursor()
        self.cur.execute("""create table if not exists tip(
        id integer primary key autoincrement,
        title text,
            content text
                    );""")
        self.con.commit()
        myhashs=[{"title":"html", "content":"pour écrire une page html utilise les balises, html, head, body et ajouter du javascript avec la balise script et du css avec la balise link"},{"title":"animations css", "content":"savez vous comment utiliser keyframes en css pour faire des rotations et translation d'image ?"}]
        for myhash in myhashs:
          self.cur.execute("insert or ignore into tip (title,content) values (:title,:content)",myhash)
          self.con.commit()
        #self.con.close()
    def getall(self):
        self.cur.execute("select * from tip")

        row=self.cur.fetchall()
        return row
    def deletebyid(self,myid):

        self.cur.execute("delete from tip where id = ?",(myid,))
        job=self.cur.fetchall()
        self.con.commit()
        return None
    def getbyid(self,myid):
        self.cur.execute("select * from tip where id = ?",(myid,))
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
          self.cur.execute("insert into tip (title,content) values (:title,:content)",myhash)
          self.con.commit()
          myid=str(self.cur.lastrowid)
        except Exception as e:
          print("my error"+str(e))
        azerty={}
        azerty["tip_id"]=myid
        azerty["notice"]="votre tip a été ajouté"
        return azerty




