import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {ModalsModule} from './core/modals/modals.module';
import {ListsModule} from './lists/lists.module';
import {metaReducers, reducers} from './reducers';
import {AppEffects} from './app.effects';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageCardModule} from './image-card/image-card.module';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritesPageComponent,
    HeaderComponent
  ],
  imports: [
    ModalsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ImageCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ListsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
