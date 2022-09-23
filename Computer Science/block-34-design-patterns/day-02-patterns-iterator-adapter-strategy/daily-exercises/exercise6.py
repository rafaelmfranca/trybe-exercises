from abc import ABC, abstractmethod


class EstrategiaImposto(ABC):
    @abstractmethod
    def calcular_imposto(self, valor):
        return NotImplementedError


class EstrategiaISS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.1


class EstrategiaICMS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.06


class EstrategiaPIS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.0065


class EstrategiaCOFINS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto: EstrategiaImposto):
        return imposto.calcular_imposto(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(EstrategiaISS)}")
print(f"ICMS: {orcamento.calcular_imposto(EstrategiaICMS)}")
print(f"PIS: {orcamento.calcular_imposto(EstrategiaPIS)}")
print(f"COFINS: {orcamento.calcular_imposto(EstrategiaCOFINS)}")
