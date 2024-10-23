from fastapi import FastAPI

app = FastAPI()

@app.get("/manis")
def read_manis():
    return {
        "manis": ["mani con pasas", "mani dulce", "mani salado", "mani con chocolate"]
        
    }

