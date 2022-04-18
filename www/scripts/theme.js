const themeTitleTag = document.querySelector('.theme-title');
const themeTitle = {
  'theme-light': 'Tema Cáqui',
  'theme-lighter': 'Tema Claro',
  'theme-dark': 'Tema Escuro',
  'theme-darker': 'Tema Obscuro',
  'undefined': 'Tema Claro',
  '': 'Tema Claro'
};

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
  themeTitleTag.setAttribute("title", themeTitle[themeName]); // Seta um nome na tag Title
}

function toggleTheme() {
  let nextTheme = {
    'theme-lighter': 'theme-light',
    'theme-light': 'theme-dark',
    'theme-dark': 'theme-darker',
    'theme-darker': 'theme-lighter',
    'undefined': 'theme-light',
    '': 'theme-light'
  };
  setTheme(nextTheme[localStorage.getItem('theme')]);
}

(function() {
  themeTitleTag.setAttribute("title", themeTitle[localStorage.getItem('theme')]);
  setTheme(localStorage.getItem('theme'));
})();
