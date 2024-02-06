import whisper
import speech_recognition as sr
import base64 

class SpeechToTextConverter():
    def __init__(self, decodedFileName="input_audio.wav"):
        self.model = whisper.load_audio("base")
        self.AudioFileName = decodedFileName

    def decodeBase64AudioToFile(self, Base64Audio):
        decode_string = base64.b64decode(Base64Audio)
        
        with open(self.AudioFileName, "wb") as wav_file:
            wav_file.write(decode_string)

    def processAudio(self):
        _a = whisper.load_audio(self.AudioFileName)
        _a = whisper.pad_or_trim(_a)

        _m = whisper.log_mel_spectrogram(_a).to(self.model.device)

        _options = whisper.DecodingOptions(fp16 = False)
        _o = whisper.decode(self.model, _m, _options)

        transcription = _o.text 
        return transcription
    
    def transform(self, Base64Audio):
        self.decodeBase64AudioToFile(Base64Audio)
        result = self.processAudio()

        return result


