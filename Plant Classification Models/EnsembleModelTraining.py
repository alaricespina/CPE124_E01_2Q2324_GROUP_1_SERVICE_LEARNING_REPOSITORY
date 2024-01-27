import pandas as pd 
import cv2 
import matplotlib.pyplot as plt 

from keras import Model 
from keras.layers import Input, Conv2D, AveragePooling2D, Dense, InputLayer, Flatten, BatchNormalization, Dropout
from keras.models import Sequential
from keras.utils import to_categorical

import numpy as np 

from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import LabelEncoder

from MRVModels.LeNet import MRV_LeNet

from tqdm import tqdm 

# Load Unaugmented Data
loaded_arr = np.load("UnAugmented_Compressed_Dataset.npz")
_X = loaded_arr["raw_X"]
_y = loaded_arr["raw_y"]

le = LabelEncoder()
_y = le.fit_transform(_y)
_y = to_categorical(_y)

X_t, X_test, y_t, y_test = train_test_split(_X, _y, test_size=0.2)
X_train, X_valid, y_train, y_valid = train_test_split(X_t, y_t, test_size=0.2)

# #Load Data from Compressed Numpy Format 

# loaded_arr = np.load("Numpy_Compressed_Dataset.npz")
# t_d = loaded_arr["train_data"]
# t_l = loaded_arr["train_label"]
# X_test = loaded_arr["test_data"]
# y_test = loaded_arr["test_label"]

# X_train, X_valid, y_train, y_valid = train_test_split(t_d, t_l, test_size=0.2)

# Load Dataset
# mnist_dataset = load_digits(return_X_y=True)
# X, y = mnist_dataset
# X = X.reshape(-1, 8, 8, 1)
# y = to_categorical(y)
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2)
# X_train, X_valid, y_train, y_valid = train_test_split(X_train, y_train, test_size=0.1)



CONV_CONSTANT = 2
# DENSE_CONSTANT = CONV_CONSTANT * 14  
DENSE_CONSTANT = CONV_CONSTANT * 128
# x = AveragePooling2D((2, 2), 2)(x)
# x = Conv2D(CONV_CONSTANT * 3, (5, 5), activation="tanh")(x)
# x = AveragePooling2D((2, 2), 2)(x)
# x = Conv2D(CONV_CONSTANT * 20, (5, 5), activation="tanh")(x)

x_in = Input(shape=X_train.shape[1:])
x = Conv2D(CONV_CONSTANT, (5, 5), activation="tanh", padding="same")(x_in)
x = BatchNormalization()(x)

x = Conv2D(CONV_CONSTANT, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = AveragePooling2D((2, 2), 2)(x)
x = Conv2D(CONV_CONSTANT * 2, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = Conv2D(CONV_CONSTANT * 2, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = AveragePooling2D((2, 2), 2)(x)
x = Conv2D(CONV_CONSTANT * 4, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = Conv2D(CONV_CONSTANT * 4, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = AveragePooling2D((2, 2), 2)(x)
x = Conv2D(CONV_CONSTANT * 8, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = Conv2D(CONV_CONSTANT * 8, (5, 5), activation="tanh", padding="same")(x)
x = BatchNormalization()(x)

x = AveragePooling2D((2, 2), 2)(x)
x = Flatten()(x)
x = Dense(DENSE_CONSTANT)(x)
x = BatchNormalization()(x)

output = Dense(10, activation='softmax')(x)
model = Model(inputs = x_in, outputs = output) 

model.compile(loss="categorical_crossentropy",
              optimizer = "adam",
              metrics = ["accuracy"])

print(model.summary())

history = model.fit(X_train, 
                    y_train, 
                    validation_data = (X_valid, y_valid),
                    validation_split = 0.2,
                    batch_size = X_train.shape[0]//128,
                    epochs = 100)

history_obj = history.history 
# test_acc = model.evaluate(X_test, y_test)[1]

test_acc = model.evaluate(X_test, y_test)[1]
test_predictions = model.predict(X_test)




plt.figure()
plt.plot(history_obj["val_accuracy"], label="val acc")
plt.plot(history_obj["accuracy"], label="acc")
plt.legend()
print("Val Accuracy:" , max(history_obj["val_accuracy"]), "Accuracy:", max(history_obj["accuracy"]))
print("Test Accuracy:", test_acc)
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