# content of test_sample.py
from convert_json import clean


def test_data():
    question = "1.	A che cosa e' dovuto l'effetto serra?"
    assert clean(question) == "A che cosa e' dovuto l'effetto serra?"

