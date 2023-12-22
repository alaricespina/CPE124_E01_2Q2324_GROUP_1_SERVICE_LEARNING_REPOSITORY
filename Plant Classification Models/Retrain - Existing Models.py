from TensorflowPreTrainedModels import (
    EfficientNetV2B3Model,
    EfficientNetV2LModel,
    EfficientNetV2MModel,
    EfficientNetV2SModel,
    ResNet50V2Model,
    ResNet101V2Model,
    ResNet152V2Model,
    InceptionV3Model,
    VGG19Model
)
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import warnings 
warnings.filterwarnings("ignore")

Models = [
    EfficientNetV2B3Model(),
    EfficientNetV2LModel(),
    EfficientNetV2MModel(),
    EfficientNetV2SModel(),
    ResNet50V2Model(),
    ResNet101V2Model(),
    ResNet152V2Model(),
    InceptionV3Model(),
    VGG19Model()
]

if __name__ == "__main__":
    for model in Models:
        print(model.model_name)
        model.prepare_data()
        model.prepare_model()
        model.fit_data(desired_size = 32, epochs = 25, ckpt_metric = "val_accuracy", ckpt_mode = "max")
        print("Done Training")




