from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, tipo, naipe):
        self.tipo = tipo
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.tipo, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    tipos = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(tipo, naipe) for naipe in self.naipes for tipo in self.tipos
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


for carta in Baralho():
    print(carta)
