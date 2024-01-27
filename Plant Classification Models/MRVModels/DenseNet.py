# Load CIFAR10 Data
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.cifar10.load_data()
image_height, image_width, channel_size = X_train.shape[1],X_train.shape[2],X_train.shape[3]
# convert to one hot encoing
y_train = tf.keras.utils.to_categorical(y_train, num_classes)
y_test = tf.keras.utils.to_categorical(y_test, num_classes)




def denseblock(input, num_filter = 12, dropout_rate = 0.2):
    global compression
    temp = input
    for _ in range(l): 
        BatchNorm = layers.BatchNormalization()(temp)
        relu = layers.Activation('relu')(BatchNorm)
        Conv2D_3_3 = layers.Conv2D(int(num_filter*compression), (3,3), use_bias=False ,padding='same')(relu)
        if dropout_rate>0:
            Conv2D_3_3 = layers.Dropout(dropout_rate)(Conv2D_3_3)
        concat = layers.Concatenate(axis=-1)([temp,Conv2D_3_3])
        temp = concat
    return temp
## transition Blosck
def transition(input, num_filter = 12, dropout_rate = 0.2):
    global compression
    BatchNorm = layers.BatchNormalization()(input)
    relu = layers.Activation('relu')(BatchNorm)
    Conv2D_BottleNeck = layers.Conv2D(int(num_filter*compression), (1,1), use_bias=False ,padding='same')(relu)
    if dropout_rate>0:
         Conv2D_BottleNeck = layers.Dropout(dropout_rate)(Conv2D_BottleNeck)
    avg = layers.AveragePooling2D(pool_size=(2,2))(Conv2D_BottleNeck)
    return avg
#output layer
def output_layer(input):
    global compression
    BatchNorm = layers.BatchNormalization()(input)
    relu = layers.Activation('relu')(BatchNorm)
    AvgPooling = layers.AveragePooling2D(pool_size=(2,2))(relu)
    flat = layers.Flatten()(AvgPooling)
    output = layers.Dense(num_classes, activation='softmax')(flat)
    return output

l = 7
input = layers.Input(shape=(image_height, image_width, channel_size,))
First_Conv2D = layers.Conv2D(30, (3,3), use_bias=False ,padding='same')(input)
First_Block = denseblock(First_Conv2D, 30, 0.5)
First_Transition = transition(First_Block, 30, 0.5)
Last_Block = denseblock(First_Transition, 30, 0.5)
output = output_layer(Last_Block)
model = Model(inputs=[input], outputs=[output])

model.compile(loss='categorical_crossentropy',
optimizer=Adam(),
metrics=['accuracy'])

from keras.preprocessing.image import ImageDataGenerator
datagen = ImageDataGenerator(height_shift_range=0.1, width_shift_range= 0.1, shear_range=0.2, zoom_range=0.2, horizontal_flip=True)
datagen.fit(X_train)
data = datagen.flow(x=X_train, y=y_train, batch_size=batch_size)
