
import {NgModule} from "@angular/core"
import { EventComponent } from "./event.component"
import { CommonModule } from "@angular/common";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";


import { eventRouter } from "@app/end-user/event/event.router";
import { EventPageComponent } from "@app/end-user/event/pages/event-page.component";

@NgModule({
    imports: [CommonModule, eventRouter, CoreModule,SharedModule],
    exports: [],
    declarations: [EventComponent,EventPageComponent],
    providers: [],
})
export class EventModule{

    
}
