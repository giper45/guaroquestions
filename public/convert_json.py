import re
import json


def clean(d):
    return re.sub(r'^\d*\.', '', d).replace('\t', '')


class Question:
    def __init__(self, domanda, a, b, c, d, e):
        self.domanda = clean(domanda)
        self.a = clean(a)
        self.b = clean(b)
        self.c = clean(c)
        self.d = clean(d)
        self.e = clean(e)


questions = []
pattern = r'^\d*\..*$'

with open('questions.txt') as f:
    lines = f.readlines()
    lines = [line for line in lines if line.strip()]
    i = 0
    for line in lines:
        if re.match(pattern, line):
            questions.append(Question(lines[i], lines[i+1],
                             lines[i+2], lines[i+3], lines[i+4], lines[i+5]))

        i = i + 1
        # print(lines[i:i+5])

obj = {}
obj['root'] = []
for q in questions:
    obj['root'].append(vars(q))

with open('questions.json', 'w') as f:
    json.dump(obj, f)
