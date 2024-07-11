const RCS_LIST = [
    {
        designation: 'КЖ.1',
        name: 'Конструкции железобетонные (генеральный план)',
        note: ''
    },
    {
        designation: 'КЖ.2',
        name: 'Конструкции железобетонные (путепровод)',
        note: ''
    },
    {
        designation: 'КЖ.3',
        name: 'Конструкции железобетонные (организация движения)',
        note: ''
    },
    {
        designation: 'КЖ.4',
        name: 'Конструкции железобетонные (хоз-питьевое и техническое водоснабжение)',
        note: ''
    },
    {
        designation: 'КЖ.5',
        name: 'Конструкции железобетонные (стены подпорные)',
        note: ''
    },
    {
        designation: 'КЖ.6',
        name: 'Конструкции железобетонные (хоз.-бытовая канализация)',
        note: ''
    },
    {
        designation: 'КЖ.7',
        name: 'Конструкции железобетонные (дождевая канализация)',
        note: ''
    },
    {
        designation: 'КЖ.8',
        name: 'Конструкции железобетонные (теплоснабжение)',
        note: ''
    },
    {
        designation: 'КЖ.9',
        name: 'Конструкции железобетонные (газоснабжение)',
        note: ''
    },
    {
        designation: 'КЖ.10',
        name: 'Конструкции железобетонные (электроснабжение)',
        note: ''
    },
    {
        designation: 'КЖ.11',
        name: 'Конструкции железобетонные (электротранспорт)',
        note: ''
    },
    {
        designation: 'КЖ.12',
        name: 'Конструкции железобетонные (электроосвещение наружное)',
        note: ''
    },
    {
        designation: 'КЖ.19',
        name: 'Конструкции железобетонные (автоматизация организации движения)',
        note: ''
    },
    {
        designation: 'КЖ.20',
        name: 'Конструкции железобетонные (демонтаж путепровода)',
        note: ''
    }
]

const TABLE_RCS_LIST = document.createElement('table');
document.body.append(TABLE_RCS_LIST);

const TITLE_TABLE_RCS_LIST = document.createElement('caption');
TITLE_TABLE_RCS_LIST.textContent = 'Ведомость комплектов марки КЖ';
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

for (let rcsList of RCS_LIST) {
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