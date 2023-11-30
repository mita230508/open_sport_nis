import { HomePage, ProfilePage, PostsPage, AboutPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/posts',
        element: PostsPage
    },
    {
        path: '/about',
        element: AboutPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
