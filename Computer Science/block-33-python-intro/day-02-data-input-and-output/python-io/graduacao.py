import csv


def main():
    with open("graduacao_unb.csv", encoding="utf-8") as graduacao_file:
        graduacao_reader = csv.reader(graduacao_file, delimiter=",", quotechar='"')
        header, *data = graduacao_reader

    count_by_department = {}
    for row in data:
        department = row[15]
        if department not in count_by_department:
            count_by_department[department] = 0
        count_by_department[department] += 1
    print(count_by_department)

    with open("department_report.csv", "w", encoding="utf-8") as department_report_file:
        writer = csv.writer(department_report_file)

        writer.writerow(["Department", "Count"])

        for department, grades in count_by_department.items():
            writer.writerow([department, grades])


main()
