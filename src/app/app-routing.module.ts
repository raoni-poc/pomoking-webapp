import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TaskAllComponent} from './task/task-all/task-all.component';
import {TaskEditComponent} from './task/task-edit/task-edit.component';
import {TimerComponent} from './timer/timer.component';
import {TaskDeleteComponent} from './task/task-delete/task-delete.component';
import {TaskAddComponent} from './task/task-add/task-add.component';
import {TaskViewComponent} from './task/task-view/task-view.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryAllComponent} from './category/category-all/category-all.component';
import {CategoryAddComponent} from './category/category-add/category-add.component';
import {CategoryViewComponent} from './category/category-view/category-view.component';

const routes: Routes = [
    {path: '', component: TimerComponent},
    {path: 'task/new', component: TaskAddComponent},
    {path: 'task/view/:id', component: TaskViewComponent},
    {path: 'task/all/:perPage/:page', component: TaskAllComponent},
    {path: 'task/edit/:id', component: TaskEditComponent},
    {path: 'task/delete/:id', component: TaskDeleteComponent},
    {path: 'timer/:id', component: TimerComponent},
    {path: 'category/new', component: CategoryAddComponent},
    {path: 'category/view/:id', component: CategoryViewComponent},
    {path: 'category/all/:perPage/:page', component: CategoryAllComponent},
    {path: 'category/edit/:id', component: CategoryEditComponent},
    {path: 'category/delete/:id', component: CategoryDeleteComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
