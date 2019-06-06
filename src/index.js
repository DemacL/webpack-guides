import _ from 'lodash';

function component() {
    let element = document.createElement('div');
    console.log(_);
    element.innerHTML = _.join(['Hello', 'webpack', '!', '你好11', '!'], ' ');

    return element;
}

document.body.appendChild(component());
