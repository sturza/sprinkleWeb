import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output() userEntered = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStart() {
    this.router.navigate(['']);
    this.userEntered.emit();
  }

}
