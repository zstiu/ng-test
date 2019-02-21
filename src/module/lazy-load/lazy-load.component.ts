import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {
    count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
      // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      // Add 'implements OnInit' to the class.
      this.count$.subscribe((number) => {
          console.log('count change:', number);
      });
  }
}
