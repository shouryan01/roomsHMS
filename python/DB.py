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

conn = create_connection("Data/rooms.db")
cur = conn.cursor()

cur.execute('''
    CREATE TABLE IF NOT EXISTS rooms(
    id INTEGER PRIMARY KEY,
    room_type INTEGER NOT NULL,
    status INTEGER NOT NULL
    )
''')
conn.commit()

cur.execute('''
    CREATE TABLE IF NOT EXISTS guests(
        guest_id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        phone INTEGER NOT NULL,
        email TEXT NOT NULL, 
        num_guests INTEGER,
        check_in TEXT NOT NULL,
        check_out TEXT NOT NULL,
        room_id INTEGER NOT NULL,
        FOREIGN KEY (room_id) REFERENCES rooms (id)
    )
''')
conn.commit()

x = 1
for i in range(101, 601, 100):
    for j in range(i, i + 10):
        if(i > 500):
            x = 3
        elif(i > 300):
            x = 2
        cur.execute('''
            INSERT INTO rooms(id, room_type, status)
            VALUES({}, {}, 0)
        '''.format(j, x))
        conn.commit()