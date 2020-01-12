import { NgModule } from '@angular/core';
import { MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
} from '@angular/material';



@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
        ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule {}