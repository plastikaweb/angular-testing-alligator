import { Question } from './question.model';
export interface FormData {
    id: number;
    questions: Question[];
    title: string;
}
