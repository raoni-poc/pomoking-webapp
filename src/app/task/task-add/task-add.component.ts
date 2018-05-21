import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task-service/task.service';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../task-interface/task';

@Component({
    selector: 'app-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

    protected task: Task;

    constructor(private taskService: TaskService) {
        this.task = {
            id: 0,
            task: '',
            description: '',
            estimate: null,
            deleted_at: null,
            created_at: null,
            updated_at: null,
            completed_at: null,
            pomodoros: null,
            categories: null,
        };
    }

    ngOnInit() {
    }

}
