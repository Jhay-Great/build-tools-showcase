import './sass/main.scss';
import data from './assets/data.json';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    data.forEach(data => {
        renderElement(cardElement(data), main);
        

    })
});

// create element
const createHTMLElement = function(type, className='') {
    const element = document.createElement(type);
    element.classList.add(className);
    
    if (type !== 'img') {
        return element;
    }

    element.setAttribute('src', '');
    element.setAttribute('alt', '');
    return element;
}

// create card element
const cardElement = function (data) {
    const cardParentElement = createHTMLElement('div', 'card');
    const imgContainer = createHTMLElement('div', 'img-container');
    const cardImage = createHTMLElement('img', 'build-tool-img');
    const infoContainer = createHTMLElement('div', 'card-info');
    const toolName = createHTMLElement('p', 'name');
    const description = createHTMLElement('p', 'description');
    const url = createHTMLElement('p', 'url');

    toolName.textContent = data.name;
    description.textContent = data.description;
    url.textContent = data.url;
    cardImage.setAttribute('src', data.icon);
    cardImage.setAttribute('alt', `an image of ${data.name} build tool`);


    imgContainer.append(cardImage);

    infoContainer.append(toolName);
    infoContainer.append(description);
    infoContainer.append(url);

    cardParentElement.append(imgContainer);
    cardParentElement.append(infoContainer);

    console.log(cardParentElement);

    return cardParentElement;
    

}

// abstract data insertion logic
// const addDataToElement = function(data) {

// }

// render to ui
const renderElement = function (element, parent) {
    return parent.append(element);
}

