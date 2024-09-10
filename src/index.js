import './sass/main.scss';
import data from './assets/data.json';

document.addEventListener('DOMContentLoaded', () => {
    // cardElement();
    const main = document.querySelector('main');
    console.log(main);

    
    renderElement(cardElement(), main);
    // console.log(data);
    data.forEach(data => {
        cardElement();
        cardElement().querySelector('.name').textContent = data.name;
        cardElement().querySelector('.description').textContent = data.description;
        cardElement.querySelector('.url').textContent = data.url;
        // console.log(document.querySelector('.build-tool-img').setAttribute('src', data.icon));
        console.log(data.name);

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

const cardElement = function (data) {
    const cardParentElement = createHTMLElement('div', 'card');
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



    infoContainer.append(toolName);
    infoContainer.append(description);
    infoContainer.append(url);

    cardParentElement.append(cardImage);
    cardParentElement.append(infoContainer);

    console.log(cardParentElement);

    return cardParentElement;
    

}

// const addDataToElement = function(data) {

// }

// const populateData = function (data, elmement) {
//     data.forEach(data => {
//         element.textContent = data.name;
//         elment
//         document.querySelector()
//     })
// }

const renderElement = function (element, parent) {
    return parent.append(element);
}

