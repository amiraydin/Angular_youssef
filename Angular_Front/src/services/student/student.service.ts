import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
// import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { Student } from 'src/models/student';
// import { UserApiService } from 'src/user-crud/user-api.service';

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    apiURL = 'http://localhost:5000';

    httpOption = {
        headers: new HttpHeaders({
            'content-type': 'application/json',
        })
    }

    private studentList: Student[] = [];
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get<Student>(this.apiURL + '/api/students').pipe(retry(1), catchError(this.handleError));
    }

    getOneUser(id: any) {
        return this.http.get<Student>(this.apiURL + '/api/students/' + id).pipe(retry(1), catchError(this.handleError));
    }

    createUser(user: any) {
        return this.http.post<Student>(this.apiURL + '/api/students/', user, this.httpOption).pipe(retry(1), catchError(this.handleError));
    }

    updateUser(id: any, user: any) {
        return this.http.put<Student>(this.apiURL + '/api/students/' + id, JSON.stringify(user), this.httpOption).pipe(retry(1), catchError(this.handleError));
    }

    deleteUser(id: any) {
        return this.http.delete<Student>(this.apiURL + '/api/students/' + id, this.httpOption).pipe(retry(1), catchError(this.handleError));
    }


    // addAnUser(student: Student) {
    //     this.restApi.createUser(student).subscribe((data: {}) => {
    //         this.router.navigate(['/tickets']);
    //     })
    // }
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