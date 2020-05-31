import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { appReducers } from './reducers/app.reducers';
import { CardEffects, CountryEffects, CasesEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CardEffects, CountryEffects, CasesEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule {}
