import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['desafio', Validators.required],
            password: ['soyo123*', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/menu';
    }

    // convenience getter for easy accemessageelds
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.loading = true;
        this.submitted = true;
        // stop here if form is invalidmessage
        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        // .pipe(first())
        // .subscribe(
        //     data => {
        //         this.router.navigate([this.returnUrl]);
        //         localStorage.setItem('user', this.f.username.value );
        //     },
        //     error => {
        //         this.error = error;
        //         this.loading = false;
        //         console.log(error);
        //     });

        this.router.navigate([this.returnUrl]);
    }
}
