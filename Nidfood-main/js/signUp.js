const form = document.getElementById('form');
setTimeout(() => { form.classList.add('active') }, 1000)

document.getElementById("form").addEventListener("submit", async (event)=> {
    event.preventDefault(); 

    const formData = new FormData(document.getElementById("form"));
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    console.log(jsonData);
    if (jsonData.ConfPassword === jsonData.password) {
        try {
            const response = await fetch('http://localhost:3055/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
                
            });
            if (response.ok) {
                console.log('sent');
                alert("تم انشاء الحساب بنجاح")
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log('An error occurred:', error);
        }
    } else {
        alert("يرجى مراجعة كلمة المرور")
    }
})
