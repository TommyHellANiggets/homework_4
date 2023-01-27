const student = "Акулов Платон Александрович";
document.getElementById("student").innerHTML = student;

const err = 20;
function RandomError(chance){
    random_number = (Math.random()* 101).toFixed()
    alert(`Выпало число ${random_number}`)
    if(chance >= random_number){
        throw new Error('Неизвестна ошибка...')}}
        try{
            RandomError(err)
            alert('Всё под контролем')
        } 
        catch (err){
            alert(`${err.message}`)
        }

