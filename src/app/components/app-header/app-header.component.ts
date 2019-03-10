import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'ngrx/reducers';
import { GetInitialUserName } from 'ngrx/actions';
import { AuthorizationService, UserInfo } from 'services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

   @Input() public logout: Function;

   public userName$: Observable<string>;

   constructor(private authService: AuthorizationService, private store$: Store<State>) {
      this.userName$ = store$.select('userName');
   }

   ngOnInit() {
      this.store$.dispatch(new GetInitialUserName());
   }

}
