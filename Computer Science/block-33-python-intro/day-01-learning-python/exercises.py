#  Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def higher_number(a, b):
    return a if a > b else b


print(higher_number(10, 15))
print(higher_number(20, 15))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(numbers):
    return sum(numbers) / len(numbers)


print(average([1, 2, 3, 4, 5]))
print(average([10, 20, 30, 40, 50]))


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
def print_square(n):
    for i in range(n):
        print(n * '*')


print_square(5)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
def longest_name(names):
    biggest = ''
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest


def longest_name2(names):
    return max(names, key=len)


print(longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(longest_name2(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).
def paint_calculation(area):
    liters = area / 3
    cans = liters / 18
    price = cans * 80
    return cans.__round__(2), price.__round__(2)


print(paint_calculation(100))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.
def triangle_type(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return 'Equilátero'
        elif a == b or a == c or b == c:
            return 'Isósceles'
        else:
            return 'Escaleno'
    else:
        return 'Não é triângulo'


print(triangle_type(1, 1, 1))
print(triangle_type(4, 4, 2))
print(triangle_type(3, 4, 5))
print(triangle_type(1, 1, 2))
