
import { NgModule } from "@angular/core"
import { EventComponent } from "./event.component"
import { CommonModule } from "@angular/common";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";


import { eventRouter } from "@app/end-user/event/event.router";
import { EventPageComponent } from "@app/end-user/event/pages/event-page.component";
import { EventBannerComponent } from "@app/end-user/event/eventbanner/eventbanner.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import { EventListComponent } from "@app/end-user/event/eventlist/eventlist.component";
// import { EventListComponent } from "@app/end-user/event/eventlist/eventlist.component";

@NgModule({
    imports: [CommonModule, eventRouter, CoreModule, SharedModule,NgbModule.forRoot()],
    exports: [],
    declarations: [EventPageComponent, EventBannerComponent,EventComponent],
    providers: [],
})
export class EventModule {

}
