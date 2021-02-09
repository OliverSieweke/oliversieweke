const FEEDBACK = "Olo le Rigolo est un coach absolument extraordinaire. Sa compétence incontestable et son enthousiasme flamboyant, font de ses sessions un pur plaisir.";


const feedback = window.feedback;
let modifiedFeedbackLength = 0;
let modifying = false;


feedback.addEventListener("input", (e) => {
    if (modifying) {return;}

    modifying = true;

    const interval = setInterval(() => {
        if (feedback.value.length !== modifiedFeedbackLength) {
            modifiedFeedbackLength = modifiedFeedbackLength < feedback.value.length ?
                                     ++modifiedFeedbackLength :
                                     feedback.value.length;

            feedback.value = FEEDBACK.substring(0, modifiedFeedbackLength) + feedback.value.substring(
                modifiedFeedbackLength);
        } else {
            modifying = false;
            clearInterval(interval);
        }
    }, 100);

});


window["fond-sonore"].addEventListener("change", () => {
    setTimeout(() => {
       window["fond-sonore-to-select"].checked = true

    }, 500);
})

window["exercises"].addEventListener("change", () => {
    setTimeout(() => {
       window["exercises-to-select"].checked = true
    }, 500);
})





