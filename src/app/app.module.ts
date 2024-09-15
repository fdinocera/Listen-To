import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CdkDropList, DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    CdkDropList,
    //DragDropModule,
    CdkDrag
  ],

  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
