document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const inboxBtn = document.getElementById('inboxBtn');
    const profileModal = document.getElementById('profileModal');
    const inboxModal = document.getElementById('inboxModal');
    const closeBtns = document.querySelectorAll('.close-btn');


    profileBtn.addEventListener('click', () => {
        profileModal.style.display = 'block';
    });


    inboxBtn.addEventListener('click', () => {
        inboxModal.style.display = 'block';
    });

    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            inboxModal.style.display = 'none';
        });
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
        if (e.target === inboxModal) {
            inboxModal.style.display = 'none';
        }
    });

    
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.style.color = '#e23636';
            } else {
                this.style.color = '#ffffff';
            }
        });
    });
});