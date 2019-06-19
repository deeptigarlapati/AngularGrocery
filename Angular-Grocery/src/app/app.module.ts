import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatGridListModule
  ],
  exports: [
    FormsModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
