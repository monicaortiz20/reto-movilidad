from flask import Flask
import os
from flask import request
import fucion as f
import numpy as np

os.chdir(os.path.dirname(__file__))

app = Flask(__name__)
app.config['DEBUG'] = True



@app.route("/", methods=['GET'])
def hello():
    return "Bienvenido a mi API del modelo"

# 1. Devolver la predicción de los nuevos datos enviados mediante argumentos en la llamada
@app.route('/estimar', methods=['GET'])
def predict():
    
    distance = float(request.args["distance"])
    tipo_transporte = str(request.args["type"]).lower()

    if tipo_transporte == "moto":
        return f.emision_moto(distance)
    elif tipo_transporte == "bus":
        return f.emision_bus(distance)
    elif tipo_transporte == "metro":
        return f.emision_tren_electrico(distance)
    elif tipo_transporte == "coche":
        return f.emision_car(distance)
    

   
    

app.run()