const myClick = (value) => {
    myform.display.value += value;
}
const ac = () => {
    myform.display.value = "";
}

const delBtn = () => {
    let del = myform.display.value;
    myform.display.value = del.toString().slice(0, -1);
}

const equalTo = () => {
    let eqn = myform.display.value;
    myform.display.value = eval(eqn);
}