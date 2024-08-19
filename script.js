
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery .item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            items.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });

    // Initialize showing all items by default
    document.querySelector('.filter-btn[data-filter="all"]').click();
});
