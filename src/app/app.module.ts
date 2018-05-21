import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TaskAllComponent} from './task/task-all/task-all.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TaskListComponent} from './task/task-list/task-list.component';
import {TaskButtonNewComponent} from './task/task-button-new/task-button-new.component';
import {TaskService} from './task/task-service/task.service';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './message/message.service';
import {PaginatorComponent} from './paginator/paginator.component';
import {ActivatedRoute} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {TaskFormComponent} from './task/task-form/task-form.component';
import {TaskEditComponent} from './task/task-edit/task-edit.component';
import {TimerComponent} from './timer/timer.component';
import {FormatTimerPipe} from './format-timer.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskDeleteComponent } from './task/task-delete/task-delete.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryAllComponent } from './category/category-all/category-all.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import {CategoryService} from './category/category.service';
import { CategoryFormComponent } from './category/category-form/category-form.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskAllComponent,
        TopNavbarComponent,
        FooterComponent,
        PageNotFoundComponent,
        TaskListComponent,
        TaskButtonNewComponent,
        PaginatorComponent,
        LoadingComponent,
        TaskFormComponent,
        TaskEditComponent,
        TimerComponent,
        FormatTimerPipe,
        TaskDeleteComponent,
        TaskAddComponent,
        TaskViewComponent,
        CategoryAddComponent,
        CategoryAllComponent,
        CategoryDeleteComponent,
        CategoryEditComponent,
        CategoryListComponent,
        CategoryViewComponent,
        CategoryFormComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        TaskService,
        MessageService,
        CategoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
