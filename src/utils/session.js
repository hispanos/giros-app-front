export const redirectUser = (navigate) => {
    const userSession = sessionStorage.getItem('user');
    if (userSession) {
        navigate('/home');
    }
}

export const protectedRoute = (navigate) => {
    const userSession = sessionStorage.getItem('user');
    if (!userSession) {
        navigate('/');
    }
}