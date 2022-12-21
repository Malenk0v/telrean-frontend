db.users.bulkWrite([
    {
        insertOne : {
            "document": {name:`Mike`, age: 45, email:`mike@test.ru`}
        }
    },
    {   
        insertOne : {
            "document": {name:`Olga`, age: 39, email:`olga@test.ru`}
        }
    },
    {
        deleteOne : {
            filter : {age: 25}
        }
    },
    {
        updateOne : {
            filter : {name: `Mike`},
            update: {$set: {email:`Mike45@test.ru`}}
        }
    },
    {    
        replaceOne : {
            filter : {name: `John`},
            replacement: {name:`Test`, password:`asdad`}
        }
    }
])

db.users.bulkWrite([   {    
    replaceOne : {
        filter : {name: `Test`},
        replacement: {name:`Booble`, password:`asdad`}
    }
}
])