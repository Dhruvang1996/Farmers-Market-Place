import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuthentication = ( authentication) => {
    const router = useRouter();
    
    useEffect(() => {
        authenticated();
    },[]);
    
    const authenticated = async () => {
        const result = await (authentication());
        if (!result) {
            router.push('/login');
        } 
    }
}