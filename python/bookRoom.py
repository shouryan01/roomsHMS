import sqlite3

conn = sqlite3.connect("Data/rooms.db")
cur = conn.cursor()

def bookRoom(id, name, phone, email, num_guests, check_in, check_out, room_id):
    sql = '''
        INSERT INTO guests(guest_id, name, phone, email, num_guests, check_in, check_out, room_id)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    '''
    cur.execute(sql, (id, name, phone, email, num_guests, check_in, check_out, room_id))
    conn.commit()
    sql = '''
        UPDATE rooms 
        SET
        status = 1
        WHERE id = ?
    '''
    cur.execute(sql, (room_id, ))
    conn.commit()

def deleteBooking(guest_id):
    sql = 'DELETE FROM guests WHERE guest_id = ?'
    cur.execute(sql, (guest_id, ))
    conn.commit()

def updateBooking(id, name, phone, email, num_guests, check_in, check_out, room_id):
    sql = '''
        UPDATE guests
        SET
        name = ?,
        phone = ?,
        email = ?,
        num_guests = ?,
        check_in = ?,
        check_out = ?,
        room_id = ?
        WHERE guest_id = ?
    '''
    cur.execute(sql, (name, phone, email, num_guests, check_in, check_out, room_id, id))
    conn.commit()

def getBookedRooms():
    cur.execute('''
        SELECT * FROM rooms
        INNER JOIN guests on guests.room_id = rooms.id
    ''')
    for row in cur.fetchall():
        print(row)

# bookRoom(1, "Robert T Harris", 6102994144, "evalyn.mckenz@hotmail.com", 2, "03/31/21", "04/01/21", 101)
# bookRoom(2, "Rosemary C Pittman", 8015145895, "ervin2009@hotmail.com", 4, "03/31/21", "04/01/21", 102)
# bookRoom(3, "Harry J Walls",  5044136018, "timothy_gerla@yahoo.com", 2, "03/31/21", "04/01/21", 103)
# bookRoom(4, "April V Walker", 7082685167, "tracey_brue0@yahoo.com", 4, "03/31/21", "04/01/21", 104)
# bookRoom(5, "Tosha D Whitworth", 9072271624, "alena_smit5@yahoo.com", 2, "03/31/21", "04/01/21", 105)

# deleteBooking(1)
# updateBooking(1, "sadf", 2314, "ggggg", 2, "ggg", "ggg", 102)
# getBookedRooms()