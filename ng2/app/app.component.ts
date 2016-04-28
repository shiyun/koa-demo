import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeroComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {HeroDetail} from './hero-detail.component';
import {HeroDetailThree} from './heroThree.component';
import {LoginComponent} from './login.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>    
    <a [routerLink]="['MyDashboard']">MyDashboard</a>
    <a [routerLink]="['Heroes']">heroes</a>
    <router-outlet></router-outlet>
  `,                                                                                                                                                                                                                                                                    
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]  
})

@RouteConfig([
  {
    path: '/ng/login',
    name: 'Login',                                                                                                                                         
    component: LoginComponent
  },
  {
    path: '/ng/heroes',
    name: 'Heroes',                                                                                                                                         
    component: HeroComponent
  },
  {
    path: '/ng/dashboard',
    name: 'MyDashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/ng/heroDetail/:id',
    name: 'HeroDetail',
    component: HeroDetail
  },
  {
    path: '/ng/heroDetail/:id/:sid',
    name: 'HeroDetailThree',
    component: HeroDetailThree
  }
])

export class AppComponent {
  title = 'Demo';
  
}