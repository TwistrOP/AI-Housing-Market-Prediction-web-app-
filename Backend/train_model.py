
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.cluster import KMeans
import joblib

# Train and save models for Dataset 1
def train_dataset1_models():
    data = pd.read_csv("data/dataset1.csv")
    X = data[['Distance', 'Postcode', 'Bedroom2', 'Bathroom', 'Car', 'Landsize', 'BuildingArea', 'YearBuilt', 'Lattitude', 'Longtitude']]
    y = data['Price']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Linear Regression
    lin_reg = LinearRegression()
    lin_reg.fit(X_train, y_train)
    joblib.dump(lin_reg, "models/dataset1_model_1.pkl")

    # Random Forest Regressor
    rf_regressor = RandomForestRegressor()
    rf_regressor.fit(X_train, y_train)
    joblib.dump(rf_regressor, "models/dataset1_model_2.pkl")

    # Ridge Regression
    ridge_regressor = Ridge()
    ridge_regressor.fit(X_train, y_train)
    joblib.dump(ridge_regressor, "models/dataset1_model_3.pkl")

    print("Dataset 1 models trained and saved.")



# Train and save models for Dataset 2
def train_dataset2_models():
    data = pd.read_csv("data/dataset2.csv")
    data['Price_Range'] = pd.cut(data['Median_Price'], bins=[0, 200000, 500000, float('inf')], labels=['Low', 'Medium', 'High'])
    data = data.dropna(subset=['Median_Price', 'Price_Range'])
    
    X = data[['Transfer_Year', 'Transaction_Count']]
    y = data['Price_Range']

    # Convert labels to numerical for RandomForestClassifier
    y = y.cat.codes  

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
    
    # Random Forest Classifier
    rf_classifier = RandomForestClassifier(random_state=42)
    rf_classifier.fit(X_train, y_train)
    joblib.dump(rf_classifier, "models/dataset2_model_1.pkl")

    # KMeans for Clustering
    kmeans = KMeans(n_clusters=3, random_state=42)
    kmeans.fit(X)
    joblib.dump(kmeans, "models/dataset2_model_2.pkl")

    print("Dataset 2 models trained and saved.")



if __name__ == "__main__":
    train_dataset1_models()
    train_dataset2_models()
