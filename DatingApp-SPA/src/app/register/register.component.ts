import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @Input() valuesFromHome: any;
    @Output() cancelRegister = new EventEmitter();
    model = new User;
    constructor(private authSvc: AuthService) { }

    ngOnInit() {
    }

    register() {
        this.authSvc.register(this.model).subscribe(() => {
            console.log('registration successful');
        }, err => {
            console.log(err);
        });
    }

    cancel() {
        this.cancelRegister.emit(false);
    }
}
