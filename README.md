// This is the another collection(schema) for Employee Database. We have to manually create it(schema collection) in the database.

{
    "_id" : ObjectId("61cc4077731d5f166eb0bfc9"),
    "title" : "Person",
    "type" : "object",
    "required" : [],
    "properties" : {
        "name" : {
            "type" : "string",
            "minLength" : 4,
            "default" : "Jeremy Dorn"
        },
        "address" : {
            "type" : "string",
            "default" : "Badda, Dhaka"
        },
        "position" : {
            "type" : "string",
            "default" : "Software Engineer"
        },
        "salary" : {
            "type" : "integer",
            "default" : 25000
        }
    }
}
