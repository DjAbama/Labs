const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

for (let i = 0; i < Object.keys(persons).length; i++) {
    res =0;
    res = persons[Object.keys(persons)[i]].died - persons[Object.keys(persons)[i]].born;
    console.log(Object.keys(persons)[i], res);
}