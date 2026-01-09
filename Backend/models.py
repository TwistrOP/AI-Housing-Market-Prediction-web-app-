import joblib
import numpy as np

# Load models for Dataset 1
linear_regression_model = joblib.load("models/dataset1_model_1.pkl")
random_forest_model = joblib.load("models/dataset1_model_2.pkl")
ridge_regression_model = joblib.load("models/dataset1_model_3.pkl")

# Load models for Dataset 2
rf_classifier = joblib.load("models/dataset2_model_1.pkl")
kmeans_model = joblib.load("models/dataset2_model_2.pkl")



# Prediction functions for Dataset 1 models
def predict_price_linear_regression(features):
    input_data = np.array([features]).reshape(1, -1)
    return linear_regression_model.predict(input_data)[0]

def predict_price_random_forest(features):
    input_data = np.array([features]).reshape(1, -1)
    return random_forest_model.predict(input_data)[0]

def predict_price_ridge_regression(features):
    input_data = np.array([features]).reshape(1, -1)
    return ridge_regression_model.predict(input_data)[0]

# Prediction and classification functions for Dataset 2
def classify_price_random_forest(features):
    input_data = np.array([features]).reshape(1, -1)
    return rf_classifier.predict(input_data)[0]

def cluster_data_kmeans(features):
    input_data = np.array([features]).reshape(1, -1)
    return kmeans_model.predict(input_data)[0]
