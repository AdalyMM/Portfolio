import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.sass']
})
export class SendEmailComponent implements OnInit {
  recipient: string = '';
  message: string = '';

  constructor(public dialogRef: MatDialogRef<SendEmailComponent>) { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    this.closeDialog();
  }

  isValidForm(): boolean {
    return this.recipient.trim() !== '' && this.message.trim() !== '';
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
