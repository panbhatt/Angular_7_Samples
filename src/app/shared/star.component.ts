import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core' ;

@Component({
    selector : 'app-star',
    templateUrl : './star.component.html'
})
export class StarComponent implements OnChanges{ 

    starWidth : number  ; 
    
    @Input() rating : number  ;

    @Output() notify : EventEmitter<string> = new EventEmitter<string>() ;

    constructor() {

    }

    ngOnChanges() : void {
        
        this.starWidth = this.rating * 75 / 5 ; 
    }

    onClick() : void { 
        this.notify.emit("Clicked raiting " + this.rating) ;
    }
}