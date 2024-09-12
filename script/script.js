document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.operation');
    const num_1 = document.querySelector('#first');
    const num_2 = document.querySelector('#second');
    const result = document.querySelector('.result');

    function kind_of_operation(a, b, op) {
        return op(a, b);
    }

    function plus(a, b) {
        return +a + +b;
    }

    function minus(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function div(a, b) {
        return a / b;
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.dir(e.target);

            if (e.target.innerHTML === '+') {
                let calcResult = kind_of_operation(num_1.value, num_2.value, plus);
                result.innerHTML = `${calcResult}`
            }
            if (e.target.innerHTML === '-') {
                let calcResult = kind_of_operation(num_1.value, num_2.value, minus);
                result.innerHTML = `${calcResult}`
            }
            if (e.target.innerHTML === '/') {
                if (num_2.value == 0) {
                    result.innerHTML = 'Ошибка, на 0 делить нельзя';
                } else {
                    let calcResult = kind_of_operation(num_1.value, num_2.value, div);
                    result.innerHTML = `${calcResult}`
                }
            }
            if (e.target.innerHTML === 'x') {
                let calcResult = kind_of_operation(num_1.value, num_2.value, multiply);
                result.innerHTML = `${calcResult}`
            }

        })
    })
})