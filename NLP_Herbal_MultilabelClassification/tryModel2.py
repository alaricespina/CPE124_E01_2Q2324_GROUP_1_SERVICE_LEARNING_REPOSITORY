from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch
import numpy as np

model_path = "khygopole/NLP_HerbalMultilabelClassification"
inputText = input("Input your symptom to get the herbal prediction: ")

model = AutoModelForSequenceClassification.from_pretrained(model_path)
tokenizer = AutoTokenizer.from_pretrained(model_path)

encoding = tokenizer(inputText, return_tensors="pt")
encoding = {k: v.to(model.device) for k,v in encoding.items()}
outputs = model(**encoding)
logits = outputs.logits
# apply sigmoid + threshold
sigmoid = torch.nn.Sigmoid()
probs = sigmoid(logits.squeeze().cpu())
predictions = np.zeros(probs.shape)
predictions[np.where(probs >= 0.5)] = 1

# turn predicted id's into actual label names
ans_cols = ["JACKFRUIT", "SAMBONG", "LEMON", "JASMINE", "MANGO", "MINT", "AMPALAYA", "MALUNGGAY", "GUAVA", "LAGUNDI"]
predicted_labels = [ans_cols[idx] for idx, label in enumerate(predictions) if label == 1.0]
print(predicted_labels)