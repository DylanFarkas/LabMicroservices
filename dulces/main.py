from fastapi import FastAPI

app = FastAPI()

@app.get("/dulces")
def read_dulces():
    return {
        "dulces": ["Paleta", "Chocolatina", "Chicles", "Polvo magico"]
       
    }

