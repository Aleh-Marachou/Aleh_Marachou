export const RCS7_LIST_BUILDING_CODE = [
    {
        designation: '3.900.1-14, в. 1',
        name: 'Изделия железобетонные для круглых колодцев водопровода и канализации',
        note: ''
    },
    {
        designation: 'Б3.902.1-1.16 в.1',
        name: 'Изделия железобетонные для ливневой канализации',
        note: ''
    },
    {
        designation: '3.006.1-2.87',
        name: 'Сборные железобетонные каналы и тоннели из лотковых элементов',
        note: ''
    },
    {
        designation: 'Б1.038.1-8.21',
        name: 'Перемычки железобетонные для зданий со стенами из каменной кладки. Выпуск 1. Перемычки брусковые. Рабочие чертежи',
        note: ''
    },
    {
        designation: '1.405.3-7.94 в.2',
        name: 'Лестницы, площадки стремянки и ограждения стальные для производственных зданий промышленных предприятий',
        note: ''
    },
    {
        designation: '3.017-3 в.1',
        name: 'Ограждения площадок и участков предприятий, зданий и сооружений',
        note: ''
    }
]

function addRcsList() {
    const TABLE_RCS_LIST = document.createElement('table');
    document.body.append(TABLE_RCS_LIST);

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

    for (let rcsList of RCS7_LIST_BUILDING_CODE) {

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

// export function rcs7ListBuildingCode (addRcsList)

export {addRcsList};
