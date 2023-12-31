import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  // {
  //   path: 'todo',
  //   loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  // },
  {
    path: 'todos',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
