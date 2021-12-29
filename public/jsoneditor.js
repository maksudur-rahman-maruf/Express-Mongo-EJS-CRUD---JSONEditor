
async function initJsonEditor() {
    let schemaList = await getSchemaList();
    let schema = schemaList[0];
    console.log(schema);

    const element = document.getElementById('myjsoneditor');

    const editor = new JSONEditor(element, {
        schema: schema,
        // theme: 'bootstrap4'
    });
};



initJsonEditor();


