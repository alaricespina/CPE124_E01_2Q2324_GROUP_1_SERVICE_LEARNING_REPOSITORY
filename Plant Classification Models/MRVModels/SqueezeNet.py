from keras.layers import Conv2D, ReLU, concatenate
from keras.layers import Dropout, AveragePooling2D, MaxPooling2D, Input
from keras import Model 



def fire_module(x,s1,e1,e3):
    s1x = Conv2D(s1,kernel_size = 1, padding = 'same')(x)
    s1x = ReLU()(s1x)
    e1x = Conv2D(e1,kernel_size = 1, padding = 'same')(s1x)
    e3x = Conv2D(e3,kernel_size = 3, padding = 'same')(s1x)
    x = concatenate([e1x,e3x])
    x = ReLU()(x)
    return x

def SqueezeNet(input_shape, nclasses):
    input = Input(input_shape)
    x = Conv2D(96,kernel_size=(7,7),strides=(2,2),padding='same')(input)
    x = MaxPooling2D(pool_size=(3,3), strides = (2,2))(x)
    x = fire_module(x, s1 = 16, e1 = 64, e3 = 64) #2
    x = fire_module(x, s1 = 16, e1 = 64, e3 = 64) #3
    x = fire_module(x, s1 = 32, e1 = 128, e3 = 128) #4
    x = MaxPooling2D(pool_size=(3,3), strides = (2,2))(x)
    x = fire_module(x, s1 = 32, e1 = 128, e3 = 128) #5
    x = fire_module(x, s1 = 48, e1 = 192, e3 = 192) #6
    x = fire_module(x, s1 = 48, e1 = 192, e3 = 192) #7
    x = fire_module(x, s1 = 64, e1 = 256, e3 = 256) #8
    x = MaxPooling2D(pool_size=(3,3), strides = (2,2))(x)
    x = fire_module(x, s1 = 64, e1 = 256, e3 = 256) #9
    x = Dropout(0.5)(x)
    x = Conv2D(nclasses,kernel_size = 1)(x)
    output = AveragePooling2D(pool_size=(13,13))(x)
    model = Model(input, output)
    
    return model