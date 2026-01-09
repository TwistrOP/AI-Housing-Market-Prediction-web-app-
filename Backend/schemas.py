
from pydantic import BaseModel

class HouseFeaturesDataset1(BaseModel):
    Distance: float
    Postcode: int
    Bedroom2: int
    Bathroom: int
    Car: int
    Landsize: float
    BuildingArea: float
    YearBuilt: int
    Lattitude: float
    Longtitude: float

class HouseFeaturesDataset2(BaseModel):
    Transfer_Year: int
    Transaction_Count: int

class PricePrediction(BaseModel):
    price: float

class PriceClassification(BaseModel):
    classification: str
