from abc import ABC, abstractmethod
from datetime import datetime


class LogHandler(ABC):
    @classmethod
    @abstractmethod
    def log(_self, msg):
        raise NotImplementedError


class LogOnFile(LogHandler):
    @classmethod
    def log(_self, msg):
        with open("log.txt", "a") as file:
            print(msg, file=file)


class LogOnScreen(LogHandler):
    @classmethod
    def log(_self, msg):
        print(msg)


class Log:
    def __init__(self, handlers):
        self.__handlers = set(handlers)

    def add_handler(self, handler):
        self.__handlers.add(handler)

    def info(_self, msg):
        print("INFO ->", msg)

    def alert(_self, msg):
        print("ALERT ->", msg)

    def error(_self, msg):
        print("ERROR ->", msg)

    def bug(_self, msg):
        print("BUG ->", msg)

    def debug(_self, msg):
        print("DEBUG ->", msg)

    def __log(self, level, msg):
        for handler in self.__handlers:
            handler.log(self.__format(level, msg))

    def __format(self, level, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{level} - {data}]: {msg}"
