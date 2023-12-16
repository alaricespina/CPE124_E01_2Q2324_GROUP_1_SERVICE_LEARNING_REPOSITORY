from tensorflow.keras.applications.vgg19 import VGG19 
from keras.utils import to_categorical

from keras.datasets.mnist import load_data

from sklearn.model_selection import train_test_split 
from keras.models import Sequential
from keras.layers import Dense, Flatten, Conv2D, Conv3D

import matplotlib.pyplot as plt 


import cv2

import numpy as np 

class VGG19Model():
    def __init__(self):
        pass 

    def prepare_data(self):
        
        # MNIST from KERAS
        (x_train, y_train), (x_test, y_test) = load_data()
        # Cv2 Resize to 32 x 32
        # Stack X to have uniform on all channels
        resized_x_train = []
        for i in range(len(x_train)):
            resized_x_train.append(cv2.resize(x_train[i], (32, 32)))

        resized_x_train = np.array(resized_x_train)

        resized_x_test = []
        for i in range(len(x_test)):
            resized_x_test.append(cv2.resize(x_test[i], (32, 32)))

        resized_x_test = np.array(resized_x_test)
        
        # Single to Multiple - Expansion
        stacked_x_train = []
        for i in range(len(resized_x_train)):
            t = resized_x_train[i].reshape(32 * 32)
            a = np.stack([t, t, t])
            a = a.reshape(32, 32, 3)
            stacked_x_train.append(a)
        
        stacked_x_train = np.array(stacked_x_train)

        stacked_x_test = []
        for i in range(len(resized_x_test)):
            t = resized_x_test[i].reshape(32 * 32)
            a = np.stack([t for _ in range(3)])
            a = a.reshape(32, 32, 3)
            stacked_x_test.append(a)
        
        stacked_x_test = np.array(stacked_x_test)

        print(resized_x_train.shape)
        print(resized_x_test.shape)
        print(x_train.shape)
        print(y_train.shape)
        print(x_test.shape)
        print(y_test.shape)
        print(y_train)
        print(stacked_x_train.shape)
        print(stacked_x_test.shape)

        # Change Y to Categorical
        y_train = to_categorical(y_train)
        y_test = to_categorical(y_test)

        self.x_train = stacked_x_train.astype(np.float32)
        self.x_test = stacked_x_test.astype(np.float32)
        self.y_train = y_train.astype(np.float32)
        self.y_test = y_test.astype(np.float32)


        self.image_size = (32, 32, 3)
        self.num_unique_classes = len(self.y_train[0])

        
        
    def prepare_model(self):
        self.model = Sequential([
            #VGG19(input_shape=(self.image_size), include_top = False),
            Conv2D(32, (3, 3), activation="tanh"),
            Flatten(),
            Dense(self.num_unique_classes, activation="softmax")
        ])

        self.model.compile(loss = "categorical_crossentropy", optimizer = "sgd", metrics = ["accuracy"])
        
        #print(self.model.summary())

        pass 

    def fit_data(self):
        self.model.fit(self.x_train, self.y_train, epochs=1, batch_size=256, validation_split=0.2, validation_data=(self.x_test, self.y_test))
        pass 

    def show_history(self):
        pass 

if __name__ == "__main__":
    A = VGG19Model()
    A.prepare_data()
    A.prepare_model()
    A.fit_data()

    