import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
      path: '',
      component: PostsComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
