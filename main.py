from fastapi import FastAPI

app = FastAPI()



@app.get("/")
def read_root():
    return {"message": "The GitHub Action ran successfully, and CI/CD has been implemented."}