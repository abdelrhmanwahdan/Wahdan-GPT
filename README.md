# Wahdan GPT

In this project I have created a mini version of the famous chat-gpt using a laptop with modest specifications However Wahdan GPT is capable of doing language tasks with pretty descent results and here is some examples of the tasks that Wahdan GPT is capable of:

- Translate from language to language.
- Summarize long paragraphs into small but meaningful paragraphs
- Parphrase sentences.
- Answer any questions

## Watch Wahdan GPT in action

To watch Wahdan GPT in action video [click here](https://www.youtube.com/watch?v=V9aneMw2nrc).<br><br>
[![Watch Wahdan GPT video](https://img.youtube.com/vi/V9aneMw2nrc/0.jpg)](https://www.youtube.com/watch?v=V9aneMw2nrc)

## Tools

This is a fullstack mini chatgpt created using natural language processing so I have used different tools for different parts of the projects which are:

- Hugging-face transformers library for the language model.
- google/flan-t5-large text2text generation model.
- React-js for the front-end part.
- Flask for the back-end part.

## Requirements

In order to run this projects you have to install the requirments of the front-end part and the requirments of the back-end part.

### Front-end requirments

```
- node.js
- react v18.2.0
- react-DOM v18.2.0
- react-Icons v4.8.0
- bootstrap v5.3.0-alpha1
- bootstrap-Icons v1.10.3
```

### Back-end requirements

```
- flask v1.1.2
- numpy v1.21.6
- torch v2.0.0
- transformers v4.27.1
```

## How to run the project

The project is divided into two main folders:

```
- client (front-end)
- flask-server (back-end)
```

In order to run the project you have to run each one seperately, and you need to have two terminals one for each server.

### How to run the front-end part

In order to run the front-end part you need to do the following:

- Open terminal in the client folder.
- Install the needed packages using the following command `npm install React React-DOM React-Icons Bootstrap Bootstrap-Icons`.
- Type the following command `npm start`.

### How to run the back-end part

In order to run the front-end part you need to do the following:

- Open terminal in the flask-server folder.
- Create a virtual environment using the following command `python -m venv venv`.
- Activate the virtual environment using the following command `sorce venv/bin/activate`.
- Install the required libraries using the following command `pip install flask numpy torch transformers`.
- Run the following command to tell flask where is your main file `export FLASK_APP=server.py`.
- Run the following command to enable the debugger mode `export FLASK_DEBUG=1`.
- Run your flask server using the following command `flask run`.
