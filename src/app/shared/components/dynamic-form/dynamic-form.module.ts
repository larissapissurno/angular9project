import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './shared/components/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './shared/services/question.service';
import { QuestionControlService } from '../../services/question-control.service';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    DynamicFormComponent
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})
export class DynamicFormModule { }
