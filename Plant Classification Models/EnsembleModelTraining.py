import pandas as pd 
import cv2 
import matplotlib.pyplot as plt 
import pickle 

from keras import Model 
from keras.layers import Input, Conv2D, AveragePooling2D, Dense, InputLayer, Flatten, BatchNormalization, Dropout
from keras.models import Sequential
from keras.utils import to_categorical

import numpy as np 

from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import LabelEncoder

# MobileNet Variant - Goods 96%

from MRVModels.MobileNet import MRV_MobileNet
from MRVModels.DenseNet import MRV_DenseNet
from MRVModels.Inception import MRV_Inception
# from MRVModels.ShuffleNet import MRV_Shuffle_Net -> Cant Train tf directml issue (hardware problem)
from MRVModels.SqueezeNet import MRV_SqueezeNet
from MRVModels.VGG import MRV_VGG
from MRVModels.ResNet import MRV_ResNet34

from tqdm import tqdm 

# Load Unaugmented Data
loaded_arr = np.load("Augmented_CV_Dataset_36_Steps.npz")
_X = loaded_arr["raw_X"]
_y = loaded_arr["raw_y"]

# #If Need to Resize
# for i in tqdm(range(len(_X))):
#     im = _X[i]
#     _ = cv2.resize(im, (224, 224))
#     np.append(new_X, _)
    
le = LabelEncoder()
_y = le.fit_transform(_y)
_y = to_categorical(_y)

X_t, X_test, y_t, y_test = train_test_split(_X, _y, test_size=0.2)
X_train, X_valid, y_train, y_valid = train_test_split(X_t, y_t, test_size=0.2)


# Model Constants for MRVs
CONV_CONSTANT = 4
DENSE_CONSTANT = CONV_CONSTANT * 128

# Model Proper

model = MRV_ResNet34(X_train.shape[1:], 10, 4)

model.compile(loss="categorical_crossentropy",
              optimizer = "adam",
              metrics = ["accuracy"])

print(model.summary())

print("X Train Shape:", X_train.shape)

history = model.fit(X_train, 
                    y_train, 
                    validation_data = (X_valid, y_valid),
                    validation_split = 0.2,
                    batch_size = X_train.shape[0]//128,
                    epochs = 100,
                    verbose = 2)

history_obj = history.history 

model.save("MRV_VGGNet.keras")

with open("MRVVGGNetHistory.pickle", "wb") as f:
    pickle.dump(history_obj, f)


test_acc = model.evaluate(X_test, y_test)[1]
test_predictions = model.predict(X_test)

print("Raw Accuracy Objet:", history_obj)
print("Val Accuracy:" , max(history_obj["val_accuracy"]), "Accuracy:", max(history_obj["accuracy"]))
print("Test Accuracy:", test_acc)

plt.figure()
plt.plot(history_obj["val_accuracy"], label="val acc")
plt.plot(history_obj["accuracy"], label="acc")
plt.legend()
plt.show()

print("Test Predictions:")
print("Numpy ArgMax")
print(np.argmax(test_predictions, axis=1)[:5])
print("All Unique Values (Check if All Classes would be predicted)")
print(np.unique(np.argmax(test_predictions, axis=1)))

print("Actual Test Values")
print("Numpy ArgMax")
print(np.argmax(y_test, axis=1)[:5])
print("All Unique Values (Check for class imbalance)")
print(np.unique(np.argmax(test_predictions, axis=1)))



