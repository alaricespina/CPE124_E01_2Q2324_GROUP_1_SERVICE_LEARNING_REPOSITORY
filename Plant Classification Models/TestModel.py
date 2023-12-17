import random 
import numpy as np 
from VGGModel import VGG19Model
from SimpleCNNModel import SimpleCNNModel 

class TestModel(SimpleCNNModel):
    def __init__(self):
        super().__init__()

if __name__ == "__main__":
    Model = TestModel()
    Model.prepare_data()
    Model.prepare_model()
    Model.fit_data(desired_size = 64, epochs = 5)
    Model.show_history()

    X_TEST = Model.x_test 
    Y_TEST = Model.y_test 

    # Random Integer Indexing
    UL = random.randint(len(X_TEST) // 2, len(X_TEST)) 
    LL = random.randint(0, UL) 
    print(f"Bounds Obtained: {LL} -> {UL}\n")

    # Single Prediction
    _, rsp = Model.predict_given_data(np.array([X_TEST[UL]]))
    print(f"Random Single Prediction | (PREDICTED): {rsp}, (ACTUAL): {np.argmax(Y_TEST[UL])}\n")

    # Group Prediction
    _, rgp = Model.predict_given_data(np.array(X_TEST[LL:UL]))
    print(f"Random Group Prediction\n(PREDICTED): {rgp}\n(ACTUAL): {np.argmax(Y_TEST[LL:UL], axis=1)}\n")

    # Model Evaluation (Interface Function)
    print(Model.eval())

