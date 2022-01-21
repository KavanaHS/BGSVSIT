document.getElementById("filterInput").addEventListener('keyup', () => {
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    let ul = document.getElementById("names");
    let li = ul.querySelectorAll(".collection-item");
    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    })
})