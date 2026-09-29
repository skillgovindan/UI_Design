import urllib.request
import os

keywords = [
    "electronics,hardware,prototype", # 1. IoT Product Development
    "circuitboard,pcb",              # 2. PCB Designing
    "3dprinter,3dprinting",          # 3. 3D Printing
    "engineering,students,mentor",   # 4. College Project Guidance
    "coding,computer,class",         # 5. Tech Courses
    "soldering,workshop,electronics" # 6. Hands-on Workshops
]

for i, kw in enumerate(keywords, 1):
    url = f"https://loremflickr.com/1000/1200/{kw}/all"
    filename = f"images/portfolio_{i}.jpg"
    print(f"Downloading {filename} from {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")
