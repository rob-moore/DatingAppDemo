import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model = new User;
    constructor(private authSvc: AuthService) { }

    ngOnInit() {
    }

    login(): void {
        this.authSvc.login(this.model).subscribe(next => {
            console.log('Login successful');
        }, err => {
            console.log('Failed to login');
        });
    }

    loggedIn(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logout(): void {
        localStorage.removeItem('token');
        console.log('Logged out');
    }
}
