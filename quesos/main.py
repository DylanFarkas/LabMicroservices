from fastapi import FastAPI
import redis

app = FastAPI()


@app.get("/quesos")
def read_quesos():
    return {
        "quesos": ["Queso cheddar", "Queso gouda", "Queso parmesano", "Queso azul"]
    }

