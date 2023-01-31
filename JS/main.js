const card = document.querySelector('section');
let btnAccordion = document.getElementsByClassName('qa-accordion');
let i;

for (i = 0; i < btnAccordion.length; i++) {
    btnAccordion[i].addEventListener('click', function () {
        this.classList.replace('qa-accordion','active');
        
        let btnIcon = this.lastElementChild.firstElementChild;
        let qaPanel = this.nextElementSibling;

        if (qaPanel.style.display === 'block') {
            qaPanel.style.display = 'none';
            this.classList.replace('active', 'qa-accordion');
            btnIcon.style.transform = 'rotate(0deg)';
        } else {
            qaPanel.style.display = 'block';
            card.style.marginTop = '60px';
            btnIcon.style.transform = 'rotate(180deg)';
        }

        if (qaPanel.style.maxHeight) {
            qaPanel.style.maxHeight = null;
        } else {
            qaPanel.style.maxHeight = qaPanel.scrollHeight + 'px';
        }
    })
}