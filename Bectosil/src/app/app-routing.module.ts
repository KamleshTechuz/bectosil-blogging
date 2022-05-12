import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserGuard } from './shared/guards/user.guard';
import { CONTENT_ROUTES } from './shared/routes/content.routes';
import { Full_ROUTES } from './shared/routes/full.routes';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '', component: FullLayoutComponent, children: Full_ROUTES },
  {
    path: '', component: ContentLayoutComponent,
    children: CONTENT_ROUTES,
    canActivate: [UserGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
