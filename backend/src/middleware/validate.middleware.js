export const validate = async (request, response, next) => {
    try {
        const email = request.body.email;
        const name = request.body.name;
        const password = request.body.password;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !password) { return response.json({ success: false, error: 'all', message: 'All fields are required' }) }
        if (!emailRegex.test(email)) { return response.json({ success: false, error: 'email', message: 'Invalid email' }) }
        if (!passwordRegex.test(password)) { return response.json({ success: false, error: 'password', message: 'Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character' }) }
        request.body = { name, email, password };
        next();
    } catch (error) {
        console.error('Validation error:', error);
        return response.status(500).json({ success: false, message: 'Server error during validation' });
    }
};
