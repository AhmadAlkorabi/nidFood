const form = document.getElementById('form');
setTimeout(() => { form.classList.add('active') }, 1000)

document.getElementById("form").addEventListener("submit",  (event) => {
    event.preventDefault();

    const formData = new FormData(document.getElementById("form"));
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    console.log(jsonData);
    } 
)
