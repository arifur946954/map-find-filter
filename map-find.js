const value=[
{id:10,name:'arif'},
{id:51,name:'zaman'},
{id:54,name:'shaarafat'},
{id:48,name:'rima'},
{id:45,name:'rezuan'}
];
const ids=value.map(s=>s.id);
const idss=value.filter(s=>s.id>40);
const idse=value.find(s=>s.id>50);//prothom condition ta dekhbe
console.log(ids);
console.log(idss);
console.log(idse);