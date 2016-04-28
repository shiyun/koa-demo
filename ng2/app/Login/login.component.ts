import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {MdTabs} from "ng2-material/components/tabs/tabs";
import {HeroDetail} from '../hero-detail.component';
import {LoginService} from './login.service';

@Component({
  selector: 'login-page',
  templateUrl: 'app/Login/login.html',
  styleUrls: ['app/Login/login.css'],
  directives: [HeroDetail],
  providers: [LoginService]
})

export class LoginComponent {

}