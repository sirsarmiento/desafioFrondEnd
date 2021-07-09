import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  returnUrl: string;
  constructor( private router: Router, public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  actionFunction() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
