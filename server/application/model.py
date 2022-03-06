import pandas as pd
import numpy as np


#importing and merging two csv files
df = pd.concat(
    map(pd.read_csv, ["C:\\Users\\ASUS\\Downloads\\DATA SCIENCE\\Project\\Music Recommender System\\Datasets\\meditationandrelaxation1.csv","C:\\Users\\ASUS\\Downloads\\DATA SCIENCE\\Project\\Music Recommender System\\Datasets\\meditationandrelaxation2.csv","C:\\Users\\ASUS\\Downloads\\DATA SCIENCE\\Project\\Music Recommender System\\Datasets\\meditationandrelaxation3.csv","C:\\Users\\ASUS\\Downloads\\DATA SCIENCE\\Project\\Music Recommender System\\Datasets\\meditationandrelaxation4.csv","C:\\Users\\ASUS\\Downloads\\DATA SCIENCE\\Project\\Music Recommender System\\Datasets\\meditationandrelaxation5.csv"]), ignore_index=True)
print(df)

df.head()

#finding total NaN values in dataset
df.isna().sum()

#displaying all rows having all NaN values 
df[df.isnull().any(axis=1)]

#coverting dtype of object to datetime 
df['Album Release Date'] = pd.to_datetime(df['Album Release Date'])
df.dtypes