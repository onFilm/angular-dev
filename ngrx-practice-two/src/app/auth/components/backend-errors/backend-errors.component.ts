import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../shared/backendErrors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-errors.component.html',
  styleUrl: './backend-errors.component.css'
})
export class BackendErrorsComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface = {};
  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const msg = this.backendErrors[name].join(' ')
      return `${name} ${msg}`;
    })
  }
}
