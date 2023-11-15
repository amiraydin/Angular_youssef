import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { Student } from 'src/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    apiURL = 'http://localhost:3000';
    private studentList: Student[] = STUDENTS_MOCKED;
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    constructor(private http: HttpClient) {
    }
    httpOption = {
        headers: new HttpHeaders({
            'content-type': 'application/json',
        })
    }
    getStudent(): Observable<Student> {
        return this.http.get<Student>(this.apiURL + '/').pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: any) {
        let errMsg = '';
        if (error.error instanceof ErrorEvent) errMsg = error.error.message;
        else errMsg = `Error Code : ${error.statut}\nMessage : ${error.message}`;
        window.alert(errMsg);
        return throwError(() => {
            return errMsg;
        })
    }
}