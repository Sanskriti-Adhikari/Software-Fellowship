from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json
DATA_PATH="t.\odos.json"
app=FastAPI()
class Todo (BaseModel):
    id: int
    title: str
    completed: bool
def read_todos():
    with open(DATA_PATH,"r") as f:
        todos=json.load(f)
    return todos
def write_todos(todo):
    with open(DATA_PATH,"w") as f:
        json.dump(todo,f,indent=2)
@app.post("/create-todo")
def create_todo(todo:Todo):
    todos=read_todos()
    for t in todos:
        if t["id"]==todo.id:
            raise HTTPException(status_code=400,detail="Todo with given id already exists")
    todo_dict=todo.dict()
    todos.append(todo_dict)
    write_todo(todo_dict)
    return todo_dict
#fastapi dev Day4P2.py
@app.get("/")
def read_todos_route():
    todos=read_todos()
    return JSONResponse(content=todos,status_code=200)
#get, tryout, execute, list from json file
@app.get("/get-todo/{todo_id}")
def get_todo_by_id(todo_id:int):
    return{
        "id":todo_id
    }