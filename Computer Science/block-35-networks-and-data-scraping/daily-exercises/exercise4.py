import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
suffix = "...more"

response = requests.get(url)
selector = Selector(text=response.text)

title = selector.css("div.product_main h1::text").get()
price = selector.css("p.price_color::text").re_first(r"£\d+\.\d{2}")
desc = selector.css("#product_description ~ p::text").get()
cover = url + selector.css("#product_gallery img::attr(src)").get()

if desc.endswith(suffix):
    desc = desc[: -len(suffix)]

print(title, price, desc, cover, sep=",")
