from abc import ABC, abstractmethod
from collections.abc import Iterable, Iterator


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(self, index: int) -> int:
        return NotImplementedError


class IteracaoRegular(EstrategiaIteracao):
    @classmethod
    def proxima_carta(self, index: int):
        return index + 1


class IteracaoInversa(EstrategiaIteracao):
    @classmethod
    def proxima_carta(self, index: int):
        return index - 1


class Carta:
    def __init__(self, tipo, naipe):
        self.tipo = tipo
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.tipo, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas: list[Carta], estrategia: EstrategiaIteracao):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = isinstance(estrategia, IteracaoInversa) and -1 or 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_carta(self._pos)
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    tipos = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia: EstrategiaIteracao):
        self._cartas = [
            Carta(tipo, naipe) for naipe in self.naipes for tipo in self.tipos
        ]
        self._estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self._estrategia)


for carta in Baralho(IteracaoRegular):
    print(carta)
