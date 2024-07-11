// не работает

const fontStyle = document.createElement("link");
fontStyle.setAttribute('rel', 'stylesheet');
fontStyle.setAttribute('type', 'text/css');
fontStyle.setAttribute('href', 'fonts/fontStyles.css');
fontStyle.setAttribute('media', 'screen');
document.head.prepend(cssStyle);

const cssStyle = document.createElement("link");
cssStyle.setAttribute('rel', 'stylesheet');
cssStyle.setAttribute('type', 'text/css');
cssStyle.setAttribute('href', 'style.css');
cssStyle.setAttribute('media', 'screen');
document.head.prepend(cssStyle);