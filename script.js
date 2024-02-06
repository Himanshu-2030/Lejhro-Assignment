function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "380px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "380px";
    }
}

const sectionmain = document.querySelector(".blogs");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
            document.querySelector('.logo_white').src = './images/lejhro_logo_blue.png'; 
        } else {
            document.body.classList.remove("sticky");
            document.querySelector('.logo_white').src = './images/lejhro_logo_white.png'; 
        }
    }, {
        root: null,
        threshold: 0,
        rootMargin: "",
    }
);

observer.observe(sectionmain);
