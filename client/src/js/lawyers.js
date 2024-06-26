

const {Lawyers} = window.AppData;

const concord_body = document.querySelector('#concord-lawyer-card_container');
concord_body.innerHTML = null;

Lawyers.concord.forEach((lawyer, index) => {
    const div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3',  'mb-5', 'concord_employee');
    div.setAttribute('data-id', index);
    div.innerHTML = `
    
        <div class="lawyer-card_container">
            <div class="lawyer-card_content">
                <div class="mb-3 img-lawyer-card_container">
                    <img src="../../src/img/concord-lawyers/${lawyer.image}" alt="lawyer">
                </div>
                <div class="lawyer-info_container">
                    <div class="lawyer-name">${lawyer.name + ' ' + lawyer.surname}</div>
                    <div class="lawyer-city">${lawyer.city}</div>
                    
                    <a class="lawyer-email" href="mailto:${lawyer.email}">
                        ${lawyer.email}
                    </a>
                    
                </div>
            </div>
        </div>
    
    `;

    concord_body.append(div);
})


const likewood_body = document.querySelector('#likewood-lawyer-card_container');
likewood_body.innerHTML = null;

likewood_body.innerHTML = Lawyers.likewood.map((lawyer, index) => {
    return `
    
        <div data-id="${index}" class="col-sm-6 col-lg-4 mb-5 likewood_employee">
        <div class="lawyer-card_container">
        <div class="lawyer-card_content">
            <div class="mb-3 likewood-img-lawyer-card_container">
                <img src="../../src/img/likewood-lawyers/${lawyer.image}" alt="">
            </div>
            <div class="likewood-lawyer-info_container px-2">
                <div class="lawyer-name fw-bolder">${lawyer.name}</div>
                
                    <ul>
                        ${lawyer.competences.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                
                
                <a class="lawyer-email" href="mailto:${lawyer.email}">
                    ${lawyer.email}
                </a>
                
            </div>
        </div>
    </div>

        </div>
    `;
       
}).join("");
