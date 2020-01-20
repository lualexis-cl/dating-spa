import { MemberDetailComponent } from './_components/members/member-detail/member-detail.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MemberListComponent } from './_components/members/member-list/member-list.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { HomeComponent } from './_components/home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'member', component: MemberListComponent },
      { path: 'member/:id', component: MemberDetailComponent },
      { path: 'lists', component: ListsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
