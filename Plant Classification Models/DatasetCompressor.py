import pandas as pd 
import numpy as np 
import cv2 
from keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder

import matplotlib.pyplot as plt 

from tqdm import tqdm 

# Train Annotations
o_train_annotations = pd.read_csv("Full Train Annotations.csv")
allowed_columns = ["image_name", "x0", "y0", "x1", "y1", "class"]
_columns = list(filter(lambda x: x not in allowed_columns, o_train_annotations.columns))
o_train_annotations.drop(labels=_columns, axis=1, inplace=True)

# Test Annotations
o_test_annotations = pd.read_csv("Full Test Annotations.csv")
allowed_columns = ["image_name", "x0", "y0", "x1", "y1", "class"]
_columns = list(filter(lambda x: x not in allowed_columns, o_test_annotations.columns))
o_test_annotations.drop(labels=_columns, axis=1, inplace=True)

# Train and Testing Paths 
train_paths = o_train_annotations["image_name"].tolist()
test_paths = o_test_annotations["image_name"].tolist()

print("Converting Labels to Categorical Values")

un_le = LabelEncoder()

o_train_annotations["class"] = un_le.fit_transform(o_train_annotations["class"])
o_test_annotations["class"] = un_le.transform(o_test_annotations["class"])

train_label = to_categorical(o_train_annotations["class"]).tolist()
test_label = to_categorical(o_test_annotations["class"]).tolist()
train_label = np.array(train_label)
test_label = np.array(test_label)

train_data = []
test_data = []

IMAGE_RESIZE = (64, 64)

print("Converting Images to Numpy Arrays")

for file in tqdm(train_paths):
    _ = cv2.imread(file, cv2.IMREAD_ANYCOLOR)
    _ = cv2.resize(_, IMAGE_RESIZE)
    norm = cv2.normalize(_, None, alpha=0, beta=1, norm_type=cv2.NORM_MINMAX, dtype=cv2.CV_32F)
    train_data.append(norm)


np_train_data = np.array(train_data)
del train_data 

np_train_data = np_train_data

for file in tqdm(test_paths):
    _ = cv2.imread(file, cv2.IMREAD_ANYCOLOR)
    _ = cv2.resize(_, IMAGE_RESIZE)
    norm = cv2.normalize(_, None, alpha=0, beta=1, norm_type=cv2.NORM_MINMAX, dtype=cv2.CV_32F)
    test_data.append(norm)

np_test_data = np.array(test_data)
del test_data 

np_test_data = np_test_data 

print("Saving Numpy Arrays to Compressed Format")

np.savez_compressed('Numpy_Compressed_Dataset', 
                    train_data = np_train_data,
                    train_label = train_label,
                    test_data = np_test_data,
                    test_label = test_label)

