import {useEffect} from 'react';

const Route = ({path, children}) => {
    const onLocationChange = (e) => {
        console.log('Location Change', e);
    };

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return window.location.pathname === path ? children : null;
};

export default Route;