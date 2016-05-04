import {Component} from 'angular2/core';
//import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
//import {MdTabs} from "ng2-material/components/tabs/tabs";
import {HeroDetail} from '../hero-detail.component';
import {LoginService} from './login.service';
import {FooterDownComponent} from '../footerDown/footerDown.component'

@Component({
  selector: 'login-page',
  templateUrl: 'app/Login/login.html',
  styleUrls: ['app/Login/login.css'],
  directives: [HeroDetail, FooterDownComponent],
  providers: [LoginService]
})

export class LoginComponent {
  phoneNum: number;
  veriNum: number;
  
  constructor(private _loginService: LoginService){}
  
  login(phoneNum){
    let data = JSON.stringify({phone: phoneNum.value, type:1});    
    this._loginService.getLogin(data).then(res=>console.log(res));
  }
}