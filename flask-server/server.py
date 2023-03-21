from flask import Flask, request
import torch
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer, pipeline


def create_app():
    app = Flask(__name__)

    torch.cuda.empty_cache()

    app.gpt = pipeline("text2text-generation", model="google/flan-t5-large")

    def respond(text):
        response = app.gpt(text, max_length=100)[0]["generated_text"]
        return response

    @app.route("/", methods=["POST"])
    def home():

        entry_content = request.json.get("data")

        response = respond(entry_content)

        return {"sender": "Wahdan", "content": response}

    return app
