const form = document.getElementById('form');
setTimeout(() => { form.classList.add('active') }, 1000)

const getEmails = async () => {
    const res = await fetch('http://localhost:3055/users')
    const data = await res.json();
    const arEmail = data.map((e) => e.email)
    const arName = data.map((e) => e.name)
    const arPass = data.map((e) => e.password)
    const formData = new FormData(document.getElementById("form"));
    const jsonData = {};
    const auth = authenticateUser(jsonData.name, jsonData.email)
    formData.append('auth', auth)
    formData.forEach((value, key) => {
        jsonData[key] = value;  
    });
    if (arEmail.includes(jsonData.email) && arName.includes(jsonData.name)&& arPass.includes(jsonData.password)){
            try {
                const response = await fetch('http://localhost:3055/logIn', {
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
        alert('لايوجد هذا الحساب')
    }

    console.log(jsonData);
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    getEmails();
} 
    
)


function authenticateUser(username, password) {
    const token = `${username}:${password}`;
    const base64Credentials = btoa(token); 
    return `Barrer ${base64Credentials}`;
}