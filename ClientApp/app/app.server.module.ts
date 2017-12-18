import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './app/app.component';
import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";
import { AdminComponent } from "./modules/admin/admin.component";

@NgModule({
    bootstrap: [ AppComponent],
    imports: [
        ServerModule,
        AppModuleShared
    ],
    providers:[
        AdminGuard,
        AuthGuard,
    ]
})
export class AppModule {
}
