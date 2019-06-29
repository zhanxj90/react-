import http from 'utils/http'

export const postAccess = (code)=>http.post(
    '/login/oauth/access_token',
    {
        client_id: '7b304ba9e2fd4803a33e',
        client_secret: '6e4bde563af5283a4ed26b1c7d114c2060d6935a',
        code
    }
)