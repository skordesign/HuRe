import { NgModule } from '@angular/core';
import { UIModule } from '@ui/ui.module';
import { DirectiveModule } from '@directives/directive.module';
import { GuardModule } from '@guards/guard.module';
import { ServiceModule } from '@services/service.module';


@NgModule({
    imports: [UIModule, DirectiveModule, GuardModule, ServiceModule],
    exports: [DirectiveModule, UIModule, GuardModule, ServiceModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
