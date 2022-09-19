class Statistic:
    @classmethod
    def mean(_self, data):
        return sum(data) / len(data)

    @classmethod
    def median(_self, data):
        data.sort()
        index = len(data) // 2
        if len(data) % 2 == 0:
            return (data[index - 1] + data[index]) / 2

        return data[index]

    @classmethod
    def mode(_self, data):
        return max(set(data), key=data.count)
