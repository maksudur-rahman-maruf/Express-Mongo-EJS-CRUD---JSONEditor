
const initJsonEditor = function () {

    const element = document.getElementById('myjsoneditor');

    const editor = new JSONEditor(element, {
        schema: schema,
        // theme: 'bootstrap4'
    });

    console.log(editor.getValue());
    console.log(schema.properties);

    // try {
    //     let url = `/list_employee_payload`;

    //     const res = await fetch(url, { method: 'GET' });

    //     if (res.status == 200) return await res.json();
    // } catch (e) {
    //     console.log(e);
    // }

}

const schema = {
    "title": "Person",
    "type": "object",
    "required": [],
    "properties": {
        "name": {
            "type": "string",
            "description": "First and Last name",
            "minLength": 4,
            "default": "Jeremy Dorn"
        },
        "age": {
            "type": "integer",
            "default": 25,
            "minimum": 18,
            "maximum": 99
        },
        "favorite_color": {
            "type": "string",
            "format": "color",
            "title": "favorite color",
            "default": "#ffa500"
        },
        "gender": {
            "type": "string",
            "enum": [
                "male",
                "female",
                "other"
            ]
        },
        "date": {
            "type": "string",
            "format": "date",
            "options": {
                "flatpickr": {}
            }
        },
    }
};

initJsonEditor();
