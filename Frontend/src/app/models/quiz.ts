import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        console.log(data);
        //debugger;
        
        if (data) {
            console.log(data._body);
            if(data._body)
            {
                data= JSON.parse(data._body);
            }
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
