import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,xPosition,resize,componentBootstrap   } from '../customExports'

@Component({
    selector: 'app-panel',
    templateUrl: '../template.component.html',
    styleUrls: ['./panel.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {

    @ViewChildren('myVal') panelMyElements: any; 

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef
    ) { }

    @Input() panelTV:string | any;
    appTV: string

    ngOnInit():void {
        console.log(this.panelTV+ '  ngOnInit fires one remount')
        this.appTV = this.panelTV
    }

    ngAfterViewInit(): void {
        console.log( this.panelTV+ ' ngAfterViewInit fires one remount') 
        this.ryber.panelLoadEvent$ = fromEvent(window,'load')
        this.ryber.panelResizeEvent$ = fromEvent(window,'resize')    
        
    
        if(   this.panelTV === 'panelCO0'  ){
                
    
            let zChild = componentBootstrap({
                appElement:{
                    element: window.document.querySelector('app-panel[class='+this.panelTV+'],[id^="root"]') as HTMLElement,
                    css:this.ryber[this.panelTV].quantity[0][0].ngCss[0][0],
                    bool:this.ryber[this.panelTV].quantity[0][0].bool[0][0],
                    cssDefault:this.ryber[this.panelTV].quantity[0][0].ngCssDefault[0][0],
                    symbol:this.ryber[this.panelTV].quantity[0][0].symbol[0][0]
                },
                appTV:this.panelTV,
                myElements:this.panelMyElements._results,
                classes:['p_a_n_e_l_Board','p_a_n_e_l_Title','p_a_n_e_l_ArticleTitle'],
                ryber:this.ryber
            })
            // console.log(zChild)
            // console.log(this.ryber.panelCO0)
            
            
        }
        
    
    
    }  
    
    ngOnDestroy(): void {
        console.log(this.panelTV+ '  ngOnInit fires on dismount')
    }      
}
