export async function login(email, password) {
    try{
        const request = await fetch('http://localhost:3000/api/login',{
            method : 'POST',
            body : JSON.stringify({ email : email, password : password }),
            headers : {
                'Content-Type' : 'application/json'
            },
        });

        if (!request.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await request.json();
        return data;

    } catch(error){
        console.log(error);
    };
};


export async function register(name, email, password) {
    try{
        const request = await fetch('http://localhost:3000/api/register', {
            method : 'POST',
            body : JSON.stringify({ name : name, email : email, password : password }),
            headers : {
                'Content-Type' : 'application/json'
            },
        });

        if (!request.ok) {
            throw new Error(`Response status: ${response.status}`);
        };

        const data = await request.json();
        
        return data;

    } catch(error){
        console.log(error);
    };
};


export async function getProfile(id) {
    try{
        const request = await fetch('http://localhost:3000/api/get-profile',{
            method : 'POST',
            body : JSON.stringify({ id }),
            headers : {
                'Content-Type' : 'application/json'
            },
        });

        if (!request.ok) {
            throw new Error(`Response status: ${response.status}`);
        };

        const response = await request.json();
        
        return response;

    } catch(error){
        console.log(error);
    };
};


export async function bloodRequest(userId, group, amount, urgency, purpose, location) {
    try {
        const request = await fetch('http://localhost:3000/api/blood-request',{
            method : 'POST',
            body : JSON.stringify({ userId, group, amount, urgency, purpose, location }),
            headers : {
                'Content-Type' : 'application/json'
            },
        });

        if (!request.ok) {
            throw new Error(`Response status: ${response.status}`);
        };

        const response = await request.json();

        return response;

    } catch (error) {
        console.log(error);
    };
};




export async function donorRegistration(userId, blood_group, weight) {
  try{

    const request = await fetch('http://localhost:3000/api/donor-reg',{
        method : 'POST',
        body : JSON.stringify({ userId, blood_group, weight }),
        headers : {
            'Content-Type' : 'application/json',
        },
    });

    const response = await request.json();
    
    return response;

  } catch(error){
    console.log(error);
  };
};