
window.onload = function () {
    var span = document.createElement('span');

    span.className = 'fa';
    span.style.display = 'none';
    document.body.insertBefore(span, document.body.firstChild);
    
    alert(window.getComputedStyle(span, null).getPropertyValue('font-family'));
    
    document.body.removeChild(span);
};
