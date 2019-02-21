import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LazyLoadComponent } from './lazy-load.component';
import { LazyLoadRouteModule } from './lazy-load.route';

registerLocaleData(zh);

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
      CommonModule,
      LazyLoadRouteModule
  ],
//   providers: [{ provide: NZ_I18N, useValue: zh_CN }],
//   bootstrap: [LazyLoadComponent]
})
export class LazyLoadModule { }
