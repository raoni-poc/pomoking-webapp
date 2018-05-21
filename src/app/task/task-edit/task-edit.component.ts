import {Component, OnChanges, OnInit} from '@angular/core';
import {TaskService} from '../task-service/task.service';
import {TaskContainer} from '../task-interface/task-container';
import {Task} from '../task-interface/task';
import {Links} from '../../interfaces/Links';
import {Meta} from '../../interfaces/Meta';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

    public task: Task;
    title = 'Category';

    constructor(private taskService: TaskService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getTask();
    }

    getTask(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.getTask(parseInt(params['id'], 10))
                .subscribe(task => {
                    this.task = task;
                });
        });
    }

}
