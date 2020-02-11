import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/components/dynamic-form/shared/services/question.service';

@Component({
  selector: 'app-new-planet',
  templateUrl: './new-planet.component.html',
  styleUrls: ['./new-planet.component.css']
})
export class NewPlanetComponent implements OnInit {
  questions: any;

  constructor(private questionService: QuestionService) { }

  async ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
