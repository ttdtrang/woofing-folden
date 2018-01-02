export default function thank() {
    var element = document.createElement('div');
    element.innerHTML = _.join(["Meow", "<br>"], '');
    element.className = "thank";
    return element;
}