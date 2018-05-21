import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Task} from '../task-interface/task';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../task-service/task.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    @Input() task: Task;
    @Input() title = 'Task';
    taskForm: FormGroup;
    private categoryDefault = 'Teste 2';
    private categories = ['Teste 1', 'Teste 2', 'Teste 3'];

    constructor(private location: Location,
                private service: TaskService,
                private router: Router) {
    }

    ngOnInit() {
        this.taskForm = new FormGroup({
            'task': new FormControl(null, [Validators.required]),
            'description': new FormControl(null, []),
            'category': new FormControl(null, [Validators.required]),
            'estimate': new FormControl(null, []),
            'completed': new FormControl(null, [Validators.required]),
        });
        this.taskForm.controls['category'].setValue(this.categoryDefault, {onlySelf: true});
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        if (this.task.id) {
            this.editTask(this.taskForm.value);
        } else {
            this.addTask(this.taskForm.value);
        }
        // console.log(this.taskForm.value);
        // this.taskForm.reset();
    }

    editTask(form) {
        let completed_at = null;

        if (form.completed) {
            completed_at = '';
        }

        const task = {
            'id': this.task.id,
            'task': form.task,
            'description': form.description,
            'estimate': form.estimate,
            'completed': form.completed,
        };

        this.service.updateTask(task)
            .subscribe(() => this.goBack());
    }

    addTask(form) {
        const task = {
            'id': 0,
            'task': form.task,
            'description': form.description,
            'estimate': form.estimate,
            'completed': form.completed,
        };
        this.service.addTask(task)
            .subscribe((t) => {
                // this.router.navigateByUrl('task/view/' + t?.data.id);
            });
    }

}
