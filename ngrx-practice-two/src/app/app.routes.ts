import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'register',
        loadChildren: () => import('../app/auth/auth.routes').then((module) => module.registerRoutes)
    }
];
