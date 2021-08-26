const optimize = document.getElementById("optimize");
const thesis = document.getElementById("thesis");
const optimized = document.getElementById("optimized");


optimize.addEventListener("click", () => {
    let include = true;

    optimized.innerHTML = thesis.value.split(/\b|$/).reduce((accumulator, current) => {

        const hey = thesis.value.split(/\b|$/);

        if (!include && !current.match(/\w+/)) {
            accumulator.push(current);
        }
        if (include && current.match(/\w+/)) {
            accumulator.push(current);
        }
        if (current.match(/.*(\r\n|\r|\n)/)) {
            accumulator.push("</br>");
        }


        if (current.match(/\w+/)) {
            include = !include;
        }
        return accumulator;

    }, []).join("");
});