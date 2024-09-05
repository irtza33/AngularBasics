import { Component } from "@angular/core";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [
        NavComponent
    ],
    templateUrl: './container.component.html',
    styleUrl: './container.component.css'
})

export class ContainerComponent {}