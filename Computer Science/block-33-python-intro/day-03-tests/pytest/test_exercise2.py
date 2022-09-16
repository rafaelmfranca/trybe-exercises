import pytest
from exercise2 import convert_to_phone_number


def test_convert_to_phone_number_should_return_correctly():
    assert convert_to_phone_number("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
    assert convert_to_phone_number("MY-MISERABLE-JOB") == "69-647372253-562"


def test_convert_to_phone_number_should_raise_an_exception_with_empty_expression():
    with pytest.raises(ValueError):
        convert_to_phone_number("")


def test_convert_to_phone_number_should_raise_an_exception_with_invalid_length_expression():
    with pytest.raises(ValueError):
        convert_to_phone_number("a" * 31)
