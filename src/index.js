import _ from 'lodash';
import thank from './thank.js';
import $ from 'jquery';
import button from 'jqueryui/jquery-ui';
import ui from 'jqueryui/jquery-ui.theme.min.css';
import ui from 'jqueryui/jquery-ui.structure.min.css';
import theGolden from 'assets/gr.jpg';
import 'styles/main.css';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(["Woof", "woof", "<br>"], ' ');

    
    let img = new Image();
    img.src = theGolden;
    img.width = 200;
    element.appendChild(img);

    element.innerHTML = element.innerHTML + "<br>";

    let btn = document.createElement('button');
    btn.innerHTML = "Treat!";
    btn.id = 'btn-treat';
    element.appendChild(btn);

    element.className = "hello";
    return element;
}


document.body.appendChild(component());

$('#btn-treat').button().on('click', function() {
    document.body.appendChild(thank());
});

