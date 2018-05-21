import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Meta} from '../../interfaces/Meta';
import {Links} from '../../interfaces/Links';
import {Task} from '../task-interface/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
    @Input() tasks: Task[];
    @Input() loading = true;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }

    editTask(id: number) {
        this.router.navigate(['./task/edit/' + id]);
    }

    goToTimer(id: number) {
        this.router.navigate(['./timer/' + id]);
    }

    goToView(id: number) {
        this.router.navigate(['./task/view/' + id]);
    }

    deleteTask(id: number) {
        this.router.navigate(['./task/delete/' + id]);
    }

}
