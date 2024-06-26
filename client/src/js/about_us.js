const { About$Values } = window.AppData;

const tabsContainer = document.querySelector('#tabs_container'),
      mainContentContainer = document.querySelector('#about_us-content');
      tabsContainer.innerHTML = null; 

About$Values.forEach(obj => {
    tabsContainer.innerHTML += obj.title;
});

const tabs = document.querySelectorAll('.about_us-tab');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        mainContentContainer.innerHTML = null;
        fillContainer(About$Values[i]);
        
        tabs.forEach(item => item.classList.remove('active', 'shadow'))
        tab.classList.add('active', 'shadow');
    })
})


function fillContainer(OBJ) {
  
    $('.about_bg-img-container .main-title').text(OBJ.htmlTitle)
    mainContentContainer.innerHTML += `
        ${OBJ.text.map(item => `<div class="py-4"><h4>${item.subtitle}</h4><div>${item.subtext}</div></div>`).join('')}
        `;

}

fillContainer(About$Values[0])

