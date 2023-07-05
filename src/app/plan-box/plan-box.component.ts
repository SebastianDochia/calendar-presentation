import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-plan-box',
  templateUrl: './plan-box.component.html',
  styleUrls: ['./plan-box.component.scss']
})
export class PlanBoxComponent implements OnInit {
  @Input() title: string = 'ERROR';
  @Input() description: string = 'ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR';
  @Input() price: string = '$0.00';
  @Input() isCommingSoon = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    window.location.href = 'http://localhost:4200/scaffold-app/auth'
  }

}
