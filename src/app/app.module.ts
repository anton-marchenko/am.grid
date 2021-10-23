import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { GridModule } from '@shared-modules/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule.forRoot(), GridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
