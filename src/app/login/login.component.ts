import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo, debounceTime,distinctUntilChanged, debounce    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,xPosition,resize,componentBootstrap,eventDispatcher   } from '../customExports'

@Component({
  selector: 'app-login',
  templateUrl: '../template.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChildren('myVal') loginMyElements: any; 
  
    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef
    ) { }  

    @Input() loginTV:string | any;
    appTV: string    

    ngOnInit():void {
        console.log(this.loginTV+ '  ngOnInit fires one remount')
        this.appTV = this.loginTV
    }

    ngAfterViewInit(): void {
        console.log( this.loginTV+ ' ngAfterViewInit fires one remount') 
        this.ryber.loginLoadEvent$ = fromEvent(window,'load')
        this.ryber.loginResizeEvent$ = fromEvent(window,'resize')    

        
        if(   this.loginTV == 'loginCO0'   ){


            let zChild = this.zChildInit({ 
                classes: ['l_o_g_i_n_Board', 'l_o_g_i_n_UserLabel']
            })        
            console.log(zChild)

            //setup
            zChild['&#8357'].element.type = 'password'
            //

            this.ryber.loginClickEventSubscription0 = fromEvent(zChild['&#8358'].element,'click').subscribe(()=>{
                console.log('clicked')
                this.ryber.appCurrentNav = '/movie'
                let loginListPosts0  = this.ryber.loginListPost.subscribe((a)=>{
                    console.log(a)
                    loginListPosts0.unsubscribe()
                })
            })
            
        }


        this.ryber.appViewComplete.next(
            (function(qq){
                qq.ryber.appViewCompleteArray.push(   qq.appTV   )
            })(this)
        )         

    }

    ngOnDestroy(): void {
        console.log(this.loginTV+ '  ngOnDestroy fires on dismount')
        this.ryber.loginClickEventSubscription0.unsubscribe()
    }    

    private zChildInit(devObj): any {
        return componentBootstrap({
            appElement: {
                element: window.document.querySelector('app-login[class=' + this.loginTV + '],[id^="root"]') as HTMLElement,
                css: this.ryber[this.loginTV].quantity[0][0].ngCss[0][0],
                bool: this.ryber[this.loginTV].quantity[0][0].bool[0][0],
                cssDefault: this.ryber[this.loginTV].quantity[0][0].ngCssDefault[0][0],
                symbol: this.ryber[this.loginTV].quantity[0][0].symbol[0][0]
            },
            appTV: this.loginTV,
            myElements: this.loginMyElements._results,
            classes:devObj.classes,
            ryber: this.ryber,
            zProps: {
                click: 'true',
                extras: 'true'
            }
        });
    } 
    
    
}
