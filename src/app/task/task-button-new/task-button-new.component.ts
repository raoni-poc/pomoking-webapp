import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-task-button-new',
    templateUrl: './task-button-new.component.html',
    styleUrls: ['./task-button-new.component.css']
})
export class TaskButtonNewComponent {

    constructor(
        private router: Router
    ) {
    }

    addTask() {
        this.router.navigate(['./task/new']);
    }
}
