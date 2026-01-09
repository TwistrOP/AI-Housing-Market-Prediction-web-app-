from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import (
    predict_price_linear_regression,
    predict_price_random_forest,
    predict_price_ridge_regression,
    classify_price_random_forest,
    cluster_data_kmeans
)
from schemas import HouseFeaturesDataset1, HouseFeaturesDataset2, PricePrediction, PriceClassification

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get("/model_info")
async def get_model_info():
    """GET request to provide model information"""
    return {
        "models": ["linear_regression", "random_forest", "ridge_regression", "kmeans_clustering"],
        "status": "active",
        "description": "Endpoints available for price prediction and classification",
    }


# Define endpoints for predictions and classifications
@app.post("/predict_price/linear_regression", response_model=PricePrediction)
async def predict_price_linear(features: HouseFeaturesDataset1):
    price = predict_price_linear_regression([
        features.Distance, features.Postcode, features.Bedroom2, features.Bathroom,
        features.Car, features.Landsize, features.BuildingArea, features.YearBuilt,
        features.Lattitude, features.Longtitude
    ])
    return PricePrediction(price=price)

@app.post("/classify_price", response_model=PriceClassification)
async def classify_price_rf(features: HouseFeaturesDataset2):

    # Get the classification result from the model and convert it directly to a string
    classification = classify_price_random_forest([features.Transfer_Year, features.Transaction_Count])
    return PriceClassification(classification=str(classification))

