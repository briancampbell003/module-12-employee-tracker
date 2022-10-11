const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'sql_P4SS_0363',
      database: 'organization_db'
    },
    console.log(`Connected to the organization_db database.`)
);

function viewDepts() {
    db.query('SELECT * FROM depts', function (err, results) {
        console.table(results);
      });
    mainMenu();
}

viewDepts();