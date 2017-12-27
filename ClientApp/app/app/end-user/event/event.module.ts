
import {NgModule} from "@angular/core"
import { EventComponent } from "./event.component"
import { CommonModule } from "@angular/common";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";


import { eventRouter } from "@app/end-user/event/event.router";

@NgModule({
    imports: [CommonModule, eventRouter, CoreModule,SharedModule],
    exports: [],
    declarations: [EventComponent],
    providers: [],
})
export class EventModule{

    
}
