import { PreventUnsavedChanged } from './guards/prevent-unsaved-changed-guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberDetailComponent } from './_components/members/member-detail/member-detail.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MemberListComponent } from './_components/members/member-list/member-list.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { HomeComponent } from './_components/home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MemberEditComponent } from './_components/members/member-edit/member-edit.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'member/edit', component: MemberEditComponent,
          resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChanged]},
      { path: 'member', component: MemberListComponent,
            resolve: { users: MemberListResolver } },
      { path: 'member/:id', component: MemberDetailComponent,
            resolve: { user: MemberDetailResolver } },
      { path: 'lists', component: ListsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
