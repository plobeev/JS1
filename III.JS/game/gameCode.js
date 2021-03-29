//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answersArray = [], z = 1;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                answersArray.push(new answers(works.a1,works.a00,z));
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                fourthWindow(event);
                z++;
                answersArray.push(new answers(works.b1,works.b00,z));
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                fourthWindow(event);
                z++;
                answersArray.push(new answers(works.b2,works.b00,z));
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        z++;
        answersArray.push(new answers(works.d1,works.d00,z));
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                answersArray.push(new answers(works.a2,works.a00,z));
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                z++;
                answersArray.push(new answers(works.c1,works.c00,z));
                fourthWindow(event);
                break;
            case 2: // Второе действие
                z++;
                answersArray.push(new answers(works.c2,works.c00,z));
                fourthWindow(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        z++;
        answersArray.push(new answers(works.d2,works.d00,z));
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
        
}
alert('Спасибо за игру');



do {ok = false;
    var answersNumber = +prompt("введите номер вопроса");
    ok = isAnswer(z,answersNumber);
} while (!ok);


console.log(answersArray[answersNumber - 1])




//------------------------------------------

function answers(option,question,turn){    
    this.question = question;
    this.option = option;
    this.turn = turn;
}



function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function fourthWindow (abc){
    do {
        ok = false;
        abc = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (abc == -1) {
            break;
        }
        else {
            ok = isAnswer(works.d0, abc);
        }
    } while (!ok);
}
