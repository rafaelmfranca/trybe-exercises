import json
import csv

def main():
    with open("content.json", mode="r") as content_json:
        books = json.load(content_json)

        group_by_category = {}

        for book in books:
            for category in book["categories"]:
                if category not in group_by_category:
                    group_by_category[category] = 1
                    continue
                group_by_category[category] += 1

    with open("content.csv", mode="w", encoding="utf-8") as content_csv:
        writer = csv.writer(content_csv)
        writer.writerow(["categoria", "porcentagem"])

        for key in group_by_category:
            writer.writerow([key,round(group_by_category[key] / len(books) * 100, 2)])

main()