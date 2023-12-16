from keras.callbacks import ModelCheckpoint 
from keras.models import load_model 

import matplotlib.pyplot as plt 
import numpy as np 
import os 
import pickle 



class BaseClassifier():
    def __init__(self, model_name = "BaseClassifier"):
        self.model_name = model_name 
        self.checkpoint_path = "Training Checkpoints/" + self.model_name
        self.loaded_from_save = False

    def fit_data(self, desired_size = 32, epochs=5):
        x = ModelCheckpoint(self.checkpoint_path, monitor = "val_accuracy", save_weights_only = True, save_best_only = True, mode = "max")
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
        acc = [x * 100 for x in self.history["accuracy"]]
        val_acc = [x * 100 for x in self.history["val_accuracy"]]
        axs[0].set_title("Accuracy vs Val Accuracy")
        axs[0].plot(acc, label="Accuracy")
        axs[0].plot(val_acc, label="Validation Accuracy")
        axs[0].legend()
        axs[1].set_title("Loss vs Val Loss")        
        axs[1].plot(self.history["loss"], label="Loss")
        axs[1].plot(self.history["val_loss"], label="Validation Loss")
        axs[1].legend()

        plt.show()

    def load_history(self, file_name = ""):
        if file_name == "":
            search_value = f"Training Checkpoints/{self.model_name}_history.pkl"
        else:
            search_value = file_name

        if os.path.exists(search_value):
            print("History Object Found, Loading")
            with open(f"{search_value}", "rb") as f:
                self.history = pickle.load(f)
            
        else:
            print("File Not Found")


    def load_existing_model(self, model_name = ""):
        if model_name == "":
            search_value = self.model_name
        else:
            search_value = model_name 

        if os.path.exists(search_value):
            print("Model Found, Loading")
            self.model = load_model(search_value)
        else:
            print("File Not Found")

    def predict_given_data(self, treated_data_point):
        res = self.model.predict(treated_data_point)
        #print(res)

        return res, np.argmax(res, axis=1)