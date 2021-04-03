import Log from './log';
import Calc from './calc';
import react from './images/react.svg';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));

const el = document.createElement('img');
el.src = react;
document.body.appendChild(el);
