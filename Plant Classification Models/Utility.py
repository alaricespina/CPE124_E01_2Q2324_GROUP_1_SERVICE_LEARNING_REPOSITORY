import cv2 
import numpy as np 
from keras.datasets.mnist import load_data
from keras.utils import to_categorical

# Resize Images, can accept list or np array with target size as ((Width, Height))
def resize_images_array(input_array, target_size):
    return np.array([cv2.resize(input_array[i], target_size) for i in range(len(input_array))])

# Expand Single Dimension Images Array (Grayscaled Images)
# Assume that the input is an np.array with (# Total, Width, Height) as dimensions
# Accepts a Bias Array for weight per dimension
# Accepts number of dimensions
def expand_single_dimension_images_array(input_array, bias_array = [1, 1, 1]):
    #print("Input Array Dimension:", input_array.shape, input_array.shape[1], input_array.shape[2])

    res_array = []
    for i in range(len(input_array)):
        a = input_array[i].reshape(input_array.shape[1] * input_array.shape[2])
        b = []
        for bias in bias_array:
            b.append(a * bias)
        b = np.array(b)
        b = b.reshape(input_array.shape[1], input_array.shape[2], len(bias_array))
        res_array.append(b)
    
    return np.array(res_array)

def generate_mnist_dataset(show_dimensions = True):
    # MNIST from KERAS
    (x_train, y_train), (x_test, y_test) = load_data()

    # Resize to 32 x 32 (Uses OpenCV)
    resized_x_train = resize_images_array(x_train, (32, 32))
    resized_x_test = resize_images_array(x_test, (32, 32))

    # Single to Multiple - Expansion
    stacked_x_train = expand_single_dimension_images_array(resized_x_train)
    stacked_x_test = expand_single_dimension_images_array(resized_x_test)

    # Change Y to Categorical (Will be [0, 1] if binary)
    y_train_cat = to_categorical(y_train)
    y_test_cat = to_categorical(y_test)
    
    if show_dimensions:
        r = f"""
        Original Shape | (TRAIN) X: {x_train.shape}, Y: {y_train.shape} (TEST) X: {x_test.shape}, Y: {y_test.shape}
        After Resizing | (TRAIN) X: {resized_x_train.shape}, Y: {y_train.shape} (TEST) X: {resized_x_test.shape}, Y: {y_test.shape}
        After Stacking | (TRAIN) X: {stacked_x_train.shape}, Y: {y_train.shape} (TEST) X: {stacked_x_test.shape}, Y: {y_test.shape}
        After Categorical | (TRAIN) X: {stacked_x_train.shape}, Y: {y_train_cat.shape} (TEST) X: {stacked_x_test.shape}, Y: {y_test_cat.shape}
        """
        print(r)

    stacked_x_train = stacked_x_train.astype(np.float32)
    stacked_x_test = stacked_x_test.astype(np.float32)
    y_train_cat = y_train_cat.astype(np.float32)
    y_test_cat = y_test_cat.astype(np.float32)
    
    return stacked_x_train, stacked_x_test, y_train_cat, y_test_cat