//your JS code here. If required.
function removeColor() {
    const select = document.getElementById("colorSelect");

    // find selected index
    const index = select.selectedIndex;

    if (index !== -1) {
        select.remove(index);   // remove the selected option
    }
}
