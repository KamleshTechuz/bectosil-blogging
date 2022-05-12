import { Routes } from '@angular/router';
import { PageGuard } from '../guards/page.guard';

export const Full_ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [PageGuard]
    },
    {
        path: 'user',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule),
        canActivate: [PageGuard]
    }
];