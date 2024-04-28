import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskAppRoutingModule } from './task-app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAppComponent } from './task-app/task-app.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent,
    TaskAppComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDatepickerModule,
    FormsModule,
    TaskAppRoutingModule
  ]
})
export class TaskAppModule { }
