import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import warnings 
warnings.filterwarnings("ignore")


from keras.models import Sequential, load_model
from keras.layers import Dense, Flatten, Conv2D, MaxPooling2D, Dropout
import numpy as np 

from Utility import generate_mnist_dataset
from BaseClassifier import BaseClassifier


class VGG19Model(BaseClassifier):
    def __init__(self, model_name = "VGG19MODEL"):
        super().__init__(model_name = model_name)
        self.checkpoint_path = "Training Checkpoints/" + self.model_name

    def prepare_data(self):
        # Assign Class Properties for Model Building
        self.x_train, self.x_test, self.y_train, self.y_test = generate_mnist_dataset()        
        self.image_size = (32, 32, 3)
        self.num_unique_classes = len(self.y_train[0])
    
    def prepare_model(self):
        dense_units = 64
        dense_activation = "relu"
        base_unit = 8
        activation = "relu"
        kernel_size = (3, 3)
        padding = "same"

        self.model = Sequential([
            Conv2D(base_unit * 1, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 1, kernel_size, activation=activation, padding=padding),
            MaxPooling2D(pool_size=(2,2)),
            Conv2D(base_unit * 2, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 2, kernel_size, activation=activation, padding=padding),
            MaxPooling2D(pool_size=(2,2)),
            Conv2D(base_unit * 4, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 4, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 4, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 4, kernel_size, activation=activation, padding=padding),
            MaxPooling2D(pool_size=(2,2)),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            MaxPooling2D(pool_size=(2,2)),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            Conv2D(base_unit * 8, kernel_size, activation=activation, padding=padding),
            MaxPooling2D(pool_size=(2,2)),
            Flatten(),
            Dense(dense_units, activation=dense_activation),
            Dropout(0.5),
            Dense(dense_units, activation=dense_activation),
            Dropout(0.5),
            Dense(self.num_unique_classes, activation="softmax")
        ])

        self.model.compile(loss = "categorical_crossentropy", optimizer = "sgd", metrics = ["accuracy"])

    

if __name__ == "__main__":
    A = VGG19Model()
    A.prepare_data()
    A.prepare_model()
    A.fit_data(32, epochs=2)
    A.show_history()

    input_prediction = np.array([A.x_test[0]])
    raw_output, output_prediction = A.predict_given_data(input_prediction)
    
    print("Actual Value", np.argmax(A.y_test[0]))
    print("Output Raw:", output_prediction)
    


    