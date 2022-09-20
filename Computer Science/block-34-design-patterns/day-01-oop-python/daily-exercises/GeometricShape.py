from abc import ABC, abstractmethod
from math import pi as PI


class GeometricShape(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError


class Square(GeometricShape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return 4 * self.side


class Circle(GeometricShape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return PI * pow(self.radius, 2)

    def perimeter(self):
        return 2 * PI * self.radius


class Rectangle(GeometricShape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return self.length * 2 + self.width * 2
