function component() {
    let element = document.createElement('div');
    console.log(_);
    element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');

    return element;
}

document.body.appendChild(component());
