import { NgModule } from '@angular/core';
import { endUserRouter } from '@app/end-user/end-user.router';
import { EndUserComponent } from '@app/end-user/end-user.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
@NgModule({
    imports: [ CommonModule, endUserRouter, CoreModule],
    exports: [],
    declarations: [EndUserComponent]

})
export class EndUserModule { }
