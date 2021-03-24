import sqlite3

conn = sqlite3.connect("store.db")
cur = conn.cursor()

command1 = """CREATE TABLE IF NOT EXISTS
stores(store_id INTEGER PRIMARY KEY, location TEXT)"""

cur.execute(command1)

command2 = """CREATE TABLE IF NOT EXISTS
purchases(purchase_id INTEGER PRIMARY KEY, store_id INTEGER, total_cost FLOAT,
FOREIGN KEY(store_id) REFERENCES stores(store_id))"""

cur.execute(command2)

cur.execute("INSERT INTO stores VALUES (21, 'Minneapolis, MN')")
cur.execute("INSERT INTO stores VALUES (95, 'Chicago, IL')")
cur.execute("INSERT INTO stores VALUES (64, 'Iowa City, IA')")

cur.execute("INSERT INTO purchases VALUES (23, 234, 21)")
cur.execute("INSERT INTO purchases VALUES (1, 2, 3)")

cur.execute("SELECT * FROM purchases")

results = cur.fetchall()
print(results)