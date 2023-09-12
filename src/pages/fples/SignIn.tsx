

import { useHistory } from 'react-router';
import { useModel } from 'umi';

import { loadCurrentuser, loginWithUsername } from '@/hooks';

function Login() {
    const history = useHistory();
    const { setInitialState } = useModel('@@initialState');

    const handleLogin = async () => {
        console.log('login');
        localStorage.setItem('credentials', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsIm5vbmNlIjoiRTFKaWhJdGRVVHYxbkVpT0ZpcHhaQjBleVBwVkF0TWEiLCJuYW1lIjpudWxsLCJ0b2tlbl90eXBlIjoiU0VTU0lPTiIsImNsaWVudF9pZCI6IjYwNjg0ODUzMzJjNWZjODUzYTY1IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTBUMDM6Mjk6NTEuOTQ4WiJ9.mEZTXJWeweZi3oxswm2EwDS8gaFp7mxOy0nFCPwCheY");
        const user = await loadCurrentuser();
        await setInitialState((s) => ({
            ...s,
            currentUser: user,
          })); 
          const { query } = history.location as any;
        const { redirect } = query as { redirect: string };
        history.replace(redirect || '/screens');
    }

    return <div>
        <h1>Login</h1>

        <button onClick={handleLogin}>Sign in with</button>

    </div>
}

export default Login;