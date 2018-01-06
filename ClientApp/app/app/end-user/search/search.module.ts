import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { searchRouter } from '@app/end-user/search/search.router';

@NgModule({
  imports: [
    CommonModule, searchRouter
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }