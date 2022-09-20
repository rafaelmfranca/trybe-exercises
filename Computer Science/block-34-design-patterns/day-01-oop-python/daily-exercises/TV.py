class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__status = False

    def raise_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def lower_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def set_channel(self, channel):
        if channel < 1 or channel > 99:
            raise ValueError("Channel must be between 1 and 99")

        self.__channel = channel

    def turn_on_off(self):
        self.status = not self.status
