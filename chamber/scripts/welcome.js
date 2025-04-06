document.addEventListener("DOMContentLoaded",function(){
    const dialog = document.querySelector(".notification-banner");
    const dialogParagraph = document.querySelector(".dialog-para");
    const dialogCloseBtn = document.querySelector(".cls-btn");


    // Get the stored last visit (if it exists)
    let storedLastVisitDate = localStorage.getItem("lastVisit");

    //Get the current visit date directly as a Date object
    const currentVisitDate = new Date();

    if (storedLastVisitDate) {
        
        const lastVisitDate = new Date();
        console.log(lastVisitDate);

        const dateDiffMs = currentVisitDate - lastVisitDate;
        const daysDiff = Math.floor(dateDiffMs , (1000 * 60 * 60 * 24));

        if (dateDiffMs < 86400000) {
            console.log("Back so soon! Awesome!");
            dialogParagraph.textContent = "Back so soon! Awesome!";
        } else {
            dialogParagraph.textContent = `You last visited ${daysDiff} ago.`;
        }
    } else {
        dialogParagraph.textContent = "Welcome! Let us know if you have any questions.";
    }


    localStorage.setItem("lastVisit", currentVisitDate.toISOString());

    dialog.showModal();

    dialogCloseBtn.addEventListener("click", ()=>{
        dialog.close();
    })

    setTimeout(() => {
        dialog.close();
    }, 2000);

    localStorage.setItem("lastVisit", storedLastVisitDate);
})