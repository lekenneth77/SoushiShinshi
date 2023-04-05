import csv
import json

def csv_to_json(csv_path, json_path):
        dict = {}
        with open(csv_path, encoding = 'utf-8') as csv_handler:
                csv_reader = csv.DictReader(csv_handler)
                rows = []
                for row in csv_reader:
                        rows.append(row)
                dict["items"] = rows
        
        with open(json_path, 'w', encoding = 'utf-8') as json_handler:
                json_handler.write(json.dumps(dict, indent = 4))

csv_path = "data.csv"
json_path = "data.json"
csv_to_json(csv_path, json_path)