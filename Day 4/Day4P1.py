#python3 -m venv env
# .\env\Scripts\activate

from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def hello_world(): 
     return {"message": "Hello World!"}
@app.get("/users/{user_id}")
def get_user(user_id: int): 
     return {"user_id": user_id, "name": "Software fellow"}
@app.get("/sf")
def print_user(): 
     return {"Software fellow"}