import App from '../../app';

var attachElement = document.getElementById('app');
var state = {};
var app;

app = new App({ state: state});

app.renderToDom(attachElement);

