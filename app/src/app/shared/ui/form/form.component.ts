/*
 * File: form.component.ts
 * Project: crud-ngrx
 * Created: Monday, January 10th 2022, 1:35:33 pm
 * Last Modified: Monday, February 7th 2022, 5:24:20 pm
 * Copyright © 2021 AMDE Agência
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    @Input() single: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
