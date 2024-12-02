import json


def process_text_to_json(text):
    lines = text.splitlines()
    questions = []
    current_question = {}
    for line in lines:
        line = line.strip()
        if line.startswith("ANSWER:"):
            current_question["risposta"] = line.replace("ANSWER:", "").strip()
            questions.append(current_question)
            current_question = {}
        elif line.startswith("A."):
            current_question["a"] = line[2:].strip()
        elif line.startswith("B."):
            current_question["b"] = line[2:].strip()
        elif line.startswith("C."):
            current_question["c"] = line[2:].strip()
        elif line.startswith("D."):
            current_question["d"] = line[2:].strip()
        elif line.startswith("E."):
            current_question["e"] = line[2:].strip()
        elif line:
            if "domanda" not in current_question:
                current_question["domanda"] = line.strip()
    
    return {"root": questions}

with open('input.txt', 'r') as f:
    text_data = f.read()
    # Converting the provided text into JSON
    json_output = process_text_to_json(text_data)

    # Saving the JSON to a file for further use
    output_path = "questions.json"
    with open(output_path, "w", encoding="utf-8") as json_file:
        json.dump(json_output, json_file, indent=4, ensure_ascii=False)
