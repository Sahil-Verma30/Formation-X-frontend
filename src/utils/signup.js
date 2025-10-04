    export async function signup({ username, email, password }) {
    try {
        const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.message[0].messages[0].message || 'Sign up failed');
        }

        localStorage.setItem('jwt', data.jwt);

        localStorage.setItem('user', JSON.stringify(data.user));

        return data; // returns { jwt, user }
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
    }
