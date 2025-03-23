from fastapi import FastAPI

app = FastAPI()



@app.get("/")
def read_root():
    return {"message": "github action run successfully, ci cd implementated"}