import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'interfaces/ngrx';
import { UserInfo } from 'interfaces/auth';
import { GetInitialUserName } from 'ngrx/actions';
import { AuthorizationService } from 'services/authorization.service';


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
