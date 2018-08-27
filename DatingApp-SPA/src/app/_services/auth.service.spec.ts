/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Service: Auth', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService, HttpClient, HttpHandler]
        });
    });

    it('should ...', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));

});
