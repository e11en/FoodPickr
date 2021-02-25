import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CastComponent } from './components/cast/cast.component';
import { AuditionComponent } from './components/audition/audition.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { RatingComponent } from './components/rating/rating.component';
import { AdminComponent } from './components/admin/admin.component';
import { CastInvitedGridComponent } from './components/cast/cast-invited-grid/cast-invited-grid.component';
import { CastMemberComponent } from './components/cast/cast-member/cast-member.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CastComponent,
    AuditionComponent,
    JobOfferComponent,
    RatingComponent,
    AdminComponent,
    CastInvitedGridComponent,
    CastMemberComponent,
    RouletteComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
