
let editor;
let schema;
let element;
let employeeList;

async function initJsonEditor() {

    let schemaList = await getSchemaList();
    schema = schemaList[0];

     employeeList = await getEmployeeList();
    // console.log('employeeList', employeeList[0]);

    if (employeeList[0]) {
        schema.properties.name.default = employeeList[0].name;
        schema.properties.position.default = employeeList[0].position;
        schema.properties.address.default = employeeList[0].address;
        schema.properties.salary.default = employeeList[0].salary;
    }
    console.log(schema);
    console.log(employeeList[0]._id);

    element = document.getElementById('myjsoneditor');

    editor = new JSONEditor(element, {
        schema: schema,
        // theme: 'bootstrap4'
    });

    $("#save123").click(function () {
        let newEmployee = editor.getValue();
        updateEmployee(newEmployee, employeeList[0]._id);
    });


};


initJsonEditor();


