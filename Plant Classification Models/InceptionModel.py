import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import warnings 
warnings.filterwarnings("ignore")

from keras.layers import Dense, Flatten, Conv2D, MaxPooling2D, Dropout, AveragePooling2D, GlobalAveragePooling2D, Input
from keras.layers import concatenate
from keras.models import Model
import tensorflow as tf 

from BaseClassifier import BaseClassifier

# All Convolution layers have (1, 1) as default strides
 
def stem_block(x):
    y = Conv2D(32, (3, 3), strides = (2, 2), padding="same", activation = "relu")(x)  
    y = Conv2D(32, (3, 3), padding="same", activation = "relu")(y)
    y = Conv2D(64, (3, 3), padding="same", activation = "relu")(y)
    y = MaxPooling2D(pool_size = (3, 3), strides = (2, 2))(y)
    y = Conv2D(80, (1, 1), padding="same", activation = "relu")(y)
    y = Conv2D(192, (3, 3), padding="same", activation = "relu")(y)
    y1 = MaxPooling2D(pool_size = (3, 3), strides = (2, 2))(y)
    return y1


def inceptionA_block(x):
    y1 = Conv2D(64, (1, 1), padding="same", activation = "relu")(x)          
    y1 = Conv2D(96, (3, 3), padding="same", activation = "relu")(y1)  
    y1 = Conv2D(96, (3, 3), padding="same", activation = "relu")(y1)  

    y2 = Conv2D(48, (1, 1), padding="same", activation = "relu")(x)  
    y2 = Conv2D(64, (3, 3), padding="same", activation = "relu")(y2)  

    y3 = AveragePooling2D(pool_size = (3, 3), strides=(1,1), padding = "same")(x)
    y3 = Conv2D(32, (1, 1), padding="same", activation = "relu")(y3)  

    y4 = Conv2D(64, (1, 1), padding="same", activation = "relu")(x)

    res = concatenate([y1, y2, y3, y4])
    return res  


def reductionA_block(x):
    y1 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y1 = Conv2D(32, (3, 3), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (3, 3), padding="same", activation = "relu")(y1)

    y2 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)

    y3 = MaxPooling2D(pool_size=(3, 3), strides = (1, 1), padding = "same")(x)

    res = concatenate([y1, y2, y3])
    return res 

 
def inceptionB_block(x):
    y1 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y1 = Conv2D(32, (7, 1), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (1, 7), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (7, 1), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (1, 7), padding="same", activation = "relu")(y1)

    y2 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y2 = Conv2D(32, (1, 7), padding="same", activation = "relu")(y2)
    y2 = Conv2D(32, (7, 1), padding="same", activation = "relu")(y2)

    y3 = AveragePooling2D(pool_size = (3, 3), strides=(1,1), padding = "same")(x)

    y4 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)

    res = concatenate([y1, y2, y3, y4])
    return res 

 
def auxilary_classifier_block(x):
    y1 = AveragePooling2D(pool_size = (5, 5), strides=(3,3), padding = "same")(x)
    y1 = Conv2D(32, (1, 1), padding="same", activation = "relu")(y1)
    y1 = Flatten()(y1)
    y1 = Dense(768, activation = "relu")(y1)
    y1 = Dense(1000, activation = "softmax")(y1)
    return y1 

 
def reductionB_block(x):
    y1 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y1 = Conv2D(32, (1, 7), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (7, 1), padding="same", activation = "relu")(y1)
    y1 = Conv2D(32, (3, 3), padding="same", activation = "relu")(y1)

    y2 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y2 = Conv2D(32, (1, 1), padding="same", activation = "relu")(y2)

    y3 = MaxPooling2D(pool_size=(3, 3), strides = (1,1), padding = "same")(x)

    res = concatenate([y1, y2, y3])
    return res 


def inceptionC_block(x):
    y1 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y1 = Conv2D(32, (3, 3), padding="same", activation = "relu")(y1)
    y1_1 = Conv2D(32, (1, 3), padding="same", activation = "relu")(y1)
    y1_2 = Conv2D(32, (3, 1), padding="same", activation = "relu")(y1)
    y1_f = concatenate([y1_1, y1_2])

    y2 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)
    y2_1 = Conv2D(32, (1, 3), padding="same", activation = "relu")(y2)
    y2_2 = Conv2D(32, (3, 1), padding="same", activation = "relu")(y2)
    y2_f = concatenate([y2_1, y2_2])

    y3 = MaxPooling2D(pool_size=(3, 3), strides=(1,1), padding = "same")(x)
    y3 = Conv2D(32, (1, 1), padding="same", activation = "relu")(y3)
    
    y4 = Conv2D(32, (1, 1), padding="same", activation = "relu")(x)

    res = concatenate([y1_f, y2_f, y3, y4])
    return res 
    
class InceptionV3Model(BaseClassifier):
    def __init__(self, model_name = "InceptionV3MODEL"):
        super().__init__(model_name = model_name)

    def prepare_model(self):
        input_layer = Input(shape=(299, 299, 3))
        x = stem_block(input_layer)
        x = inceptionA_block(x)
        x = inceptionA_block(x)
        x = inceptionA_block(x)
        x = reductionA_block(x)
        x = inceptionB_block(x)
        x = inceptionB_block(x)
        x = inceptionB_block(x)
        x = inceptionB_block(x)
        aux = auxilary_classifier_block(x)
        x = reductionB_block(x)
        x = inceptionC_block(x)
        x = inceptionC_block(x)
        x = GlobalAveragePooling2D()(x)
        x = Dense(2048, activation = "relu")(x)
        x = Dense(1000, activation = "softmax")(x)

        self.model = Model(inputs = input_layer, outputs = [x, aux], name = "Inception V3")
        self.model.compile(loss = "categorical_crossentropy", optimizer = "sgd", metrics = ["accuracy"])

        print("Hatdog")
        pass 

if __name__ == "__main__":
    print("Starting to prepare model")
    InceptionV3Model().prepare_model()
    print("Done preparing model")