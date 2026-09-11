const eventGrid = document.querySelector('#eventGrid');
const eventSearch = document.querySelector('#eventSearch');
const emptyState = document.querySelector('#emptyState');
const toast = document.querySelector('#toast');
const modal = document.querySelector('#eventModal');
const sidebar = document.querySelector('#sidebar');
let toastTimer;

function showToast(message) {
    toast.querySelector('p').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function filterEvents() {
    const query = eventSearch.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-button.active').dataset.filter;
    let visibleEvents = 0;

    document.querySelectorAll('.event-card').forEach((card) => {
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
        const matchesSearch = card.dataset.search.includes(query);
        card.hidden = !(matchesFilter && matchesSearch);
        if (!card.hidden) visibleEvents += 1;
    });
    emptyState.classList.toggle('show', visibleEvents === 0);
}

eventSearch.addEventListener('input', filterEvents);
document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-button.active').classList.remove('active');
        button.classList.add('active');
        filterEvents();
    });
});

document.querySelectorAll('.bookmark').forEach((button) => {
    button.addEventListener('click', () => {
        const saved = button.classList.toggle('saved');
        button.textContent = saved ? '♥' : '♡';
        showToast(saved ? 'Event saved to your schedule.' : 'Event removed from your schedule.');
    });
});

document.querySelectorAll('.register-button').forEach((button) => {
    button.addEventListener('click', () => {
        showToast(`${button.dataset.event} is on your schedule.`);
        button.textContent = 'Added ✓';
        button.disabled = true;
    });
});

document.querySelectorAll('.mode-button').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.mode-button.active').classList.remove('active');
        button.classList.add('active');
        const adminPanel = document.querySelector('#admin');
        const isAdmin = button.dataset.mode === 'admin';
        adminPanel.hidden = !isAdmin;
        document.querySelector('.welcome-row h1').innerHTML = isAdmin ? 'Good morning, Admin<span class="accent-dot">.</span>' : 'Good morning, Alex<span class="accent-dot">.</span>';
        showToast(isAdmin ? 'Admin portal enabled.' : 'Student portal enabled.');
        if (isAdmin) adminPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
        sidebar.classList.remove('open');
    });
});

document.querySelector('#menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.querySelector('#notificationButton').addEventListener('click', () => showToast('You have 3 new campus updates.'));
document.querySelector('#profileButton').addEventListener('click', () => showToast('Profile menu is available in this local demo.'));

document.querySelectorAll('#createEventButton, #adminCreateButton').forEach((button) => {
    button.addEventListener('click', () => {
        modal.hidden = false;
        document.querySelector('#eventForm input').focus();
    });
});
document.querySelector('#modalClose').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', (event) => { if (event.target === modal) modal.hidden = true; });
document.querySelector('#eventForm').addEventListener('submit', (event) => {
    event.preventDefault();
    modal.hidden = true;
    event.target.reset();
    showToast('Event published locally. No server connection used.');
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') modal.hidden = true; });
