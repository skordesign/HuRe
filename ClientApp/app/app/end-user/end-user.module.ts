import { NgModule } from '@angular/core';
import { endUserRouter } from '@app/end-user/end-user.router';
import { EndUserComponent } from '@app/end-user/end-user.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { ErrorComponent } from '@app/end-user/error/error.component';
@NgModule({
    imports: [ CommonModule, endUserRouter, CoreModule],
    exports: [],
    declarations: [EndUserComponent, ErrorComponent]

})
export class EndUserModule { }
