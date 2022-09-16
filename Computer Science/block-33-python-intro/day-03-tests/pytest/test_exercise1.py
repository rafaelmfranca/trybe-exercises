from exercise1 import fizz_buzz


def test_fizz_buzz_should_return_only_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_should_return_fizz():
    assert fizz_buzz(3)[-1] == "Fizz"


def test_fizz_buzz_should_return_buzz():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_should_return_fizzbuzz():
    assert fizz_buzz(15)[-1] == "FizzBuzz"
