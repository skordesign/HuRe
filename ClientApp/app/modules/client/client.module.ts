import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UIModule } from '../common/ui/ui.module';
import { ClientComponent } from "./client.component";
import { clientRouter } from "./client.router";
@NgModule({
    imports: [clientRouter, CoreModule, UIModule],
    exports: [],
    declarations: [ ClientComponent]
})
export class ClientModule { }
