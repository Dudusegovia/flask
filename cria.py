import sqlite3

con = sqlite3.connect("dados.db")


cursor = con.cursor()


cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
    )
''')
con.commit()
con.close()
print("criado")