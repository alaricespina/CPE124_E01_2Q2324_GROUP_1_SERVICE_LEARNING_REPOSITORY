from keras.callbacks import ModelCheckpoint 
from keras.models import load_model 
from Utility import generate_mnist_dataset

import matplotlib.pyplot as plt 
import numpy as np 
import os 
import pickle 



class BaseClassifier():
    def __init__(self, model_name = "BaseClassifier"):
        self.model_name = model_name 
        self.checkpoint_path = "Training Checkpoints/" + self.model_name
        self.loaded_from_save = False

    def fit_data(self, desired_size = 32, epochs=5, ckpt_metric="val_accuracy", ckpt_mode = "max"):
        x = ModelCheckpoint(self.checkpoint_path, monitor = ckpt_metric, save_weights_only = True, save_best_only = True, mode = ckpt_mode)
        bs = len(self.x_train) // desired_size
        print("Batch Size: ", bs)
        self.history = self.model.fit(self.x_train, self.y_train, epochs=epochs, batch_size=bs, validation_split=0.2, validation_data=(self.x_test, self.y_test), callbacks=[x])
        self.model.load_weights(self.checkpoint_path)
        self.model.save(self.model_name + ".h5") 
        self.history = self.history.history
    
    def show_history(self, save_history = True):
        
        if save_history:
            with open(f"Training Checkpoints/{self.model_name}_history.pkl", "wb") as f:
                pickle.dump(self.history, f)

        fig, axs = plt.subplots(2, figsize=(10, 7))

        axs[0].set_title("Accuracy")
        axs[1].set_title("Loss")

        for key in self.history.keys():
            if "accuracy" in key:
                axs[0].plot(self.history[key], label=key)
        
            if "loss" in key:
                axs[1].plot(self.history[key], label = key)

        axs[0].legend()
        axs[1].legend()

        plt.show()

    def load_history(self, file_name = ""):
        if file_name == "":
            search_value = f"Training Checkpoints/{self.model_name}_history.pkl"
        else:
            search_value = file_name

        if os.path.exists(search_value):
            print(f"{search_value} - History Object Found, Loading")
            with open(f"{search_value}", "rb") as f:
                self.history = pickle.load(f)
            
        else:
            print(f"File {search_value} Not Found")


    def load_existing_model(self, model_name = ""):
        if model_name == "":
            search_value = self.model_name + ".h5"
        else:
            search_value = model_name 

        if os.path.exists(search_value):
            print(f"{search_value} - Model Found, Loading")
            self.model = load_model(search_value)
        else:
            print(f"File {search_value} Not Found")

    def predict_given_data(self, treated_data_point):
        res = self.model.predict(treated_data_point)
        #print(res)

        return res, np.argmax(res, axis=-1)
    
    def prepare_data(self, image_size = (32, 32), dataset_mode = "tf"):
        # Assign Class Properties for Model Building
        self.x_train, self.x_test, self.y_train, self.y_test = generate_mnist_dataset(image_size = image_size, mode = dataset_mode)        
        self.image_size = (image_size[0], image_size[1], 3)
        self.num_unique_classes = len(self.y_train[0])

    def eval(self):
        return self.model.evaluate(self.x_test, self.y_test)