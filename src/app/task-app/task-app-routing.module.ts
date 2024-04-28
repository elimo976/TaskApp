import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAppComponent } from './task-app/task-app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  {
    path: '', component: TaskAppComponent,
    children: [
      { path: '', component: TaskListComponent },
      { path: 'edit', component: TaskEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskAppRoutingModule { }
