export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''
export const useSockets = false
export const domain = 'codeworksclassroom.auth0.com'
export const audience = 'https://codeworksclassroom.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'


// NOTE: env file uploads the auth 0 log in stuff we need in order to get user access to the BCW API