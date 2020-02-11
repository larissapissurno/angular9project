import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { QuestionBase } from '../../models/question-base.model';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  formTeste: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit() {
    this.formTeste = new FormGroup({
      fieldName: new FormControl('')
    });
  }
}
