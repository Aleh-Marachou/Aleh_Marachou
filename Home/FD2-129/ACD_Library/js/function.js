/*
// не работает
function createTableList(array, key) {
    const TABLE_RCS_LIST = document.createElement('table');
    VIEWPORT.append(TABLE_RCS_LIST);

    const TITLE_TABLE_RCS_LIST = document.createElement('caption');
    TITLE_TABLE_RCS_LIST.textContent = 'Ведомость сслылочных документов';
    TABLE_RCS_LIST.append(TITLE_TABLE_RCS_LIST);

    const THEAD = document.createElement('thead');
    TABLE_RCS_LIST.append(THEAD);

    const TR = document.createElement('tr');
    THEAD.append(TR);

    const TH_Designation = document.createElement('th');
    TH_Designation.textContent = 'Обозначение';
    TR.append(TH_Designation);

    const TH_NAME = document.createElement('th');
    TH_NAME.textContent = 'Наименование';
    TR.append(TH_NAME);

    const TH_NOTE = document.createElement('th');
    TH_NOTE.textContent = 'Примечание';
    TR.append(TH_NOTE);

    const TBODY = document.createElement('tbody');
    TABLE_RCS_LIST.append(TBODY);

    for (let i = 0; i < array.length; i++) {

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = rcsList.designation;
        tr.append(td1);

        let td2 = document.createElement('td');
        td2.textContent = rcsList.name;
        tr.append(td2);

        let td3 = document.createElement('td');
        td3.textContent = rcsList.note;
        tr.append(td3);

        TBODY.append(tr);
    }
}
*/
/*
function aadFn() {

    const RCS_HEADER_TOTAL_INFARMATION = document.createElement('h3');
    RCS_HEADER_TOTAL_INFARMATION.textContent = 'Общие данные';
    document.workspace.append(RCS_HEADER_TOTAL_INFARMATION);

    const OL_CONTENT_RCS_TOTAL_INFARMATION = document.createElement('ol');
    document.workspace.append(OL_CONTENT_RCS_TOTAL_INFARMATION);

    for (let i = 0; i < RCS4_TOTAL_INFARMATION.length; i++) {

        let li = document.createElement('li');
        li.textContent = RCS4_TOTAL_INFARMATION[i];

        OL_CONTENT_RCS_TOTAL_INFARMATION.append(li);
    }
}

export default aadFn;
*/

function createTable(tbody, array) {

    array.forEach(function(items) {

        let tr = document.createElement('tr');
        let tdDesignation = document.createElement('td');
        let tdName = document.createElement('td');
        let tdNote = document.createElement('td');

        tdDesignation.textContent = items.designation;
        tdName.textContent = items.name;
        tdNote.textContent = items.note;

        tr.append(tdDesignation);
        tr.append(tdName);
        tr.append(tdNote);
        tbody.append(tr);

    });
}

// export default createTable;

export {createTable};
