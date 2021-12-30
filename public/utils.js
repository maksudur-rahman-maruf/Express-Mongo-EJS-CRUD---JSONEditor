
async function getEmployeeList() {
    try {
        let url = `employees/list_employee_payload`;

        const res = await fetch(url, { method: 'GET' });

        if (res.status == 200) return await res.json();
    } catch (e) {
        console.log(e);
    }
}

async function getSchemaList() {
    try {
        let url = `schema/list_schema_payload`;

        const res = await fetch(url, { method: 'GET' });

        if (res.status == 200) return await res.json();
    } catch (e) {
        console.log(e);
    }
}

function updateEmployee(update, employeeId) {

    let url = `employees/update/${employeeId}`;

    console.log('updatedSchema!');

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update)
    });

   
}