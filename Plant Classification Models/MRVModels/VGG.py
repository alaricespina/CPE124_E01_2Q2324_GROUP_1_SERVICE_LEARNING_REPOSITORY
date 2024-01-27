# import necessary layers

from keras.layers import Input, Conv2D
from keras.layers import MaxPool2D, Flatten, Dense
from keras import Model



def MRV_VGG(CONV_CONSTANT, DENSE_CONSTANT, NUM_CLASSES, input_layer_output, input_layer_object):

    # Input Layer Shape Recommended : 224, 224, 3 

    # 1st Conv Block
    x = Conv2D (filters = 64, kernel_size =3, padding ='same', activation='relu')(input_layer_output)
    x = Conv2D (filters = 64, kernel_size =3, padding ='same', activation='relu')(x)
    x = MaxPool2D(pool_size = 2, strides = 2, padding ='same')(x)

    # 2nd Conv Block

    x = Conv2D (filters =128, kernel_size =3, padding ='same', activation='relu')(x)
    x = Conv2D (filters =128, kernel_size =3, padding ='same', activation='relu')(x)
    x = MaxPool2D(pool_size =2, strides =2, padding ='same')(x)

    # 3rd Conv block  
    x = Conv2D (filters =256, kernel_size =3, padding ='same', activation='relu')(x) 
    x = Conv2D (filters =256, kernel_size =3, padding ='same', activation='relu')(x) 
    x = Conv2D (filters =256, kernel_size =3, padding ='same', activation='relu')(x) 
    x = MaxPool2D(pool_size =2, strides =2, padding ='same')(x)

    # 4th Conv block

    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = MaxPool2D(pool_size =2, strides =2, padding ='same')(x)

    # 5th Conv block

    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = Conv2D (filters =512, kernel_size =3, padding ='same', activation='relu')(x)
    x = MaxPool2D(pool_size =2, strides =2, padding ='same')(x)


    # Fully connected layers  
    x = Flatten()(x) 
    x = Dense(units = 4096, activation ='relu')(x) 
    x = Dense(units = 4096, activation ='relu')(x) 
    output = Dense(units = 1000, activation ='softmax')(x)

    # creating the model

    model = Model (inputs= input_layer_object, outputs =output)

    return Model
