import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import warnings 
warnings.filterwarnings("ignore")

from keras.layers import Dense, Flatten, Conv2D, MaxPooling2D, Dropout, AveragePooling2D, GlobalAveragePooling2D
from keras.layers import concatenate
from keras.models import Sequential 

from BaseClassifier import BaseClassifier

class InceptionV3Model(BaseClassifier):
    def __init__(self, model_name = "InceptionV3MODEL"):
        super().__init__(model_name = model_name)

    @classmethod 
    def stem_block(x):
        y = Conv2D(32, (3, 3), strides = (2, 2), padding="same", activation = "relu")(x)  
        y = Conv2D(32, (3, 3), strides = (2, 2), padding="same", activation = "relu")(y)
        y = Conv2D(64, (3, 3), strides = (2, 2), padding="same", activation = "relu")(y)
        y = MaxPooling2D(pool_size = (3, 3), strides = (2, 2))(y)
        y = Conv2D(80, (1, 1), strides = (1, 1), padding="same", activation = "relu")(y)
        y = Conv2D(192, (3, 3), strides = (1, 1), padding="same", activation = "relu")(y)
        y = MaxPooling2D(pool_size = (3, 3))(y)
        return y
    
    @classmethod
    def inceptionA_block(x):
        y1 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)          
        y1 = Conv2D(32, (3, 3), strides = (1, 1), padding="same", activation = "relu")(y1)  
        y1 = Conv2D(32, (3, 3), strides = (1, 1), padding="same", activation = "relu")(y1)  

        y2 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)  
        y2 = Conv2D(32, (3, 3), strides = (1, 1), padding="same", activation = "relu")(y2)  

        y3 = AveragePooling2D(pool_size = (3, 3))(x)
        y3 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(y3)  

        y4 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)

        res = concatenate([y1, y2, y3, y4])
        return res  

    @classmethod
    def reductionA_block(x):
        pass 

    @classmethod 
    def inceptionB_block(x):
        y1 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)
        y1 = Conv2D(32, (7, 1), strides = (1, 1), padding="same", activation = "relu")(y1)
        y1 = Conv2D(32, (1, 7), strides = (1, 1), padding="same", activation = "relu")(y1)
        y1 = Conv2D(32, (7, 1), strides = (1, 1), padding="same", activation = "relu")(y1)
        y1 = Conv2D(32, (1, 7), strides = (1, 1), padding="same", activation = "relu")(y1)

        y2 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)
        y2 = Conv2D(32, (1, 7), strides = (1, 1), padding="same", activation = "relu")(y2)
        y2 = Conv2D(32, (7, 1), strides = (1, 1), padding="same", activation = "relu")(y2)

        y3 = AveragePooling2D(pool_size = (3, 3))(x)

        y4 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)

        res = concatenate([y1, y2, y3, y4])
        return res 

    @classmethod 
    def auxilary_classifier_block(x):
        pass 

    @classmethod 
    def reductionB_block(x):
        pass 

    @classmethod
    def inceptionC_block(x):
        y1 = Conv2D(32, (1, 1), strides = (1, 1), padding="same", activation = "relu")(x)
        y1 = Conv2D(32, (3, 3), strides = (1, 1), padding="same", activation = "relu")(x)
        pass


    
    
    def prepare_model(self):
        pass 