import requests

def emision_moto(distance):

    MY_API_KEY='DWZEWFGC534Z96H57BTW985BK9BH'
    url = "https://beta3.api.climatiq.io/estimate"

    activity_id = "managed_assets_vehicle-vehicle_type_business_travel_motorbike-fuel_source_petrol-engine_size_na-vehicle_age_na-vehicle_weight_na"
    region = "GB"
    
    parameters= { 
        "distance": distance,
        "distance_unit": "km"}

    json_body = {
    "emission_factor": {
        "activity_id": activity_id,
        "region": region,
    },
    # Specify how much energy we're estimating for
    "parameters": parameters
    }
    
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    response = requests.post(url, json=json_body, headers=authorization_headers).json()

    return response


def emision_bus(distance):

    MY_API_KEY='DWZEWFGC534Z96H57BTW985BK9BH'
    url = "https://beta3.api.climatiq.io/estimate"

    activity_id = "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na"
    region = "GLOBAL"
    
    parameters= { 
        "distance": distance,
        "distance_unit": "km"}

    json_body = {
    "emission_factor": {
        "activity_id": activity_id,
        "region": region,
    },
    # Specify how much energy we're estimating for
    "parameters": parameters
    }
    
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    response = requests.post(url, json=json_body, headers=authorization_headers).json()

    return response

def emision_car(distance):

    MY_API_KEY='DWZEWFGC534Z96H57BTW985BK9BH'
    url = "https://beta3.api.climatiq.io/estimate"

    activity_id = "passenger_vehicle-vehicle_type_business_travel_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na"
    region = "GB"
    
    parameters= { 
        "distance": distance,
        "distance_unit": "km"}

    json_body = {
    "emission_factor": {
        "activity_id": activity_id,
        "region": region,
    },
    # Specify how much energy we're estimating for
    "parameters": parameters
    }
    
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    response = requests.post(url, json=json_body, headers=authorization_headers).json()

    return response

def emision_subway(distance):

    MY_API_KEY='DWZEWFGC534Z96H57BTW985BK9BH'
    url = "https://beta3.api.climatiq.io/estimate"

    activity_id = "passenger_train-route_subway-fuel_source_na"
    region = "GLOBAL"
    
    parameters= { 
        "distance": distance,
        "distance_unit": "km"}

    json_body = {
    "emission_factor": {
        "activity_id": activity_id,
        "region": region,
    },
    # Specify how much energy we're estimating for
    "parameters": parameters
    }
    
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    response = requests.post(url, json=json_body, headers=authorization_headers).json()

    return response

def emision_tren_electrico(distance):

    MY_API_KEY='DWZEWFGC534Z96H57BTW985BK9BH'
    url = "https://beta3.api.climatiq.io/estimate"

    activity_id = "passenger_train-route_type_na-fuel_source_electricity"
    region = "ES"
    
    parameters= { "passengers": 1,
        "distance": distance,
        "distance_unit": "km"}

    json_body = {
    "emission_factor": {
        "activity_id": activity_id,
        "region": region,
    },
    # Specify how much energy we're estimating for
    "parameters": parameters
    }
    
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    response = requests.post(url, json=json_body, headers=authorization_headers).json()

    return response
