import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  userName: string = this.authService.getLoggedInUser().customerName;
  ngOnInit(): void {

  }
  pageInfo: string = 'home';
  homeClick() {
    this.pageInfo = 'home';
  }
  productClick() {
    this.pageInfo = 'product';
  }
  orderClick() {
    this.pageInfo = 'order';
  }

}
