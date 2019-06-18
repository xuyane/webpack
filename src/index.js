import _ from 'lodash';
import './style/index.css';
import './style/a.scss';

function createDomElement(){
    var dom = document.createElement('div');
    dom.innerHTML = _.join(['aicoder.com','好！','线下视频'],'');
    dom.className = 'box';
    // dom.classList.add['box'];
    return dom;
}
let divDom = createDomElement();
   
document.body.appendChild(divDom);