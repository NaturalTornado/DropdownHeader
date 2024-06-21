document.getElementById('dropdownBtn').addEventListener('mouseover', function() {
    document.getElementById('dropdownMenu').style.display = 'block';
});

document.getElementById('dropdownBtn').addEventListener('mouseout', function() {
    document.getElementById('dropdownMenu').style.display = 'none';
});

document.getElementById('dropdownMenu').addEventListener('mouseover', function() {
    document.getElementById('dropdownMenu').style.display = 'block';
});

document.getElementById('dropdownMenu').addEventListener('mouseout', function() {
    document.getElementById('dropdownMenu').style.display = 'none';
});

const menuItems = document.querySelectorAll('#dropdownMenu p');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('menuItems').innerText = this.innerText;
    });
});
