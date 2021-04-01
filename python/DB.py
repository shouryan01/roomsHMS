import sqlite3
from sqlite3 import Error

def create_connection(path):
    connection = None
    try:
        connection = sqlite3.connect(path)
        print("Connection to SQLite DB successful")
    except Error as e: 
        print(e)
    return connection

conn = create_connection("Data/rooms.sqlite")
cur = conn.cursor()

cur.execute('''
    CREATE TABLE IF NOT EXISTS rooms(
    id INTEGER PRIMARY KEY,
    status TEXT,
    check_in TEXT,
    check_out TEXT)
''')

conn.commit()