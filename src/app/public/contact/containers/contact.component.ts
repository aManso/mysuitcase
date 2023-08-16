import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EXTENDED_SNACKBAR_TIME } from 'src/app/core/config/config';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(
    private readonly _contactService: ContactService,
    private readonly _fb: FormBuilder,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.contactForm = this._setContactForm();
  }

  private _setContactForm() {
    return this._fb.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(160)])],
      email: [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(25)])],
      subject: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
    });
  }

  public isValidForm(): boolean {
    return this.contactForm.valid;
  }

  public submit() {
    if (this.isValidForm()) {
      this._contactService.contact(this.contactForm.value).subscribe(() => {
          this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_REGISTER.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['success-snackbar']});
      },
      (error: any) => {
        this._showGeneralError();
      });
    }
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }
}
