import requests
from parsel import Selector

base_url = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
product_titles = []

while next_page_url:
    response = requests.get(base_url + next_page_url)
    selector = Selector(text=response.text)

    print(f"Scraping data in {next_page_url.split('.')[0]}...")

    for product in selector.css("article.product_pod"):
        title = product.css("h3 a::attr(title)").get()
        product_titles.append(title)

    next_page_url = selector.css("li.next a::attr(href)").get()


print("Done! Your results are:\n")

for title in product_titles:
    print(title)
