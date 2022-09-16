tuple_arr = [
    ("ABC", 2),
    ("DEF", 3),
    ("GHI", 4),
    ("JKL", 5),
    ("MNO", 6),
    ("PQRS", 7),
    ("TUV", 8),
    ("WXYZ", 9),
]


def convert_to_phone_number(exp):
    if not 1 < len(exp) <= 30:
        raise ValueError("Expression with invalid length")

    result = ""

    for ch in exp:
        if ch == '1' or ch == '0' or ch == '-':
            result += ch
        else:
            for tup in tuple_arr:
                if ch in tup[0]:
                    result += str(tup[1])

    return result
