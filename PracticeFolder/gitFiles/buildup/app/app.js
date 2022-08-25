import React from 'react/addons';

import AppRoot from '/components/AppRoot';

class App {
    constructor(options) {
        this.state = options.state;  
    }

    render(element) {
        var appRootElement = React.createElement(AppRoot, {state: this.state
        });

        if (element) {
            React.render(appRootElement,element);
            return;
        }

        return React.renderToString(appRootElement);
    }

    renderToDom(element) {
        if (!element)  {
            new Error('App.renderToDom: element is required');
    }

    this.render(element);
} 

    renderToString() {
        return this.render();
    }
}

export default App;