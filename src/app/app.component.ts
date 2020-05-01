import {   Component,OnInit,AfterViewInit,OnDestroy,ViewChildren,Inject,ElementRef,ChangeDetectorRef,ChangeDetectionStrategy  } from '@angular/core';
import {   RyberService   } from './ryber.service';
import {   fromEvent,Subject,Observable,of,Subscription,interval   } from 'rxjs';
// import {   Router,RouterEvent } from '@angular/router';
// import {   WINDOW   } from './window.service';
import {   catchError,take,timeout   } from 'rxjs/operators'

declare global {
    interface Window { Modernizr: any; }
}

window.Modernizr = window.Modernizr || {}
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})



export class AppComponent implements OnInit,AfterViewInit,OnDestroy {

    
    constructor(
        public ryber: RyberService,
        private ref:ChangeDetectorRef
    ) {}
    
    appTitle:string = 'Video of Works'
    
 
    ngOnInit(){
        console.log('app ngOnInit fires on mount')

        if(   
            window.name !== '/'   &&
            window.name !== '/home'   &&
            window.name !== '/movie'                             
        ){   
 

            window.name = '/home'


        }


        if(   this.ryber.appReloaded === 'true'   ){


            this.ryber.appCurrentNav = window.name 


        }            
              
        
        this.ryber.appViewComplete.subscribe(()=>{
            console.log(this.ryber.appCurrentNav)
            // console.log(   window.location   )
            // console.log(
            //     window.name,
            //     this.ryber.appReloaded
            // )

            
            if(   window.name === ''   ){


                window.name = '/'


            }
       

            if(   this.ryber.appReloaded !== 'true'){


                window.name = this.ryber.appCurrentNav
    
    
            }            


            if(   this.ryber.appCurrentNav  === '/' || this.ryber.appCurrentNav  === '/home'    ){


                let arr = [
                    'loginCO0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){

    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)                         
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                            fromEvent(window,'load').subscribe(()=>{
                                window.dispatchEvent(eventLegacyLoad)      
                                window.dispatchEvent(eventLegacyLoad)                             
                            })
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )   
                        }    
                        catch(e){
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )                             
                        }                                                                    
                    }  
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 
                    

                }
                
                
            }

            if(   this.ryber.appCurrentNav  === '/movie'   ){


                let arr = [
                    'panelCO0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()



                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){

    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)                         
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                            fromEvent(window,'load').subscribe(()=>{
                                window.dispatchEvent(eventLegacyLoad)      
                                window.dispatchEvent(eventLegacyLoad)                             
                            })
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )   
                        }    
                        catch(e){
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )                             
                        }                                                                    
                    }  
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 
                    

                }
                
                
            }            

             
            
        })

        console.log(window.location.pathname)
    }

    ngAfterViewInit(){
        console.log('app ngAfterViewInit fires on mount')
    }

    ngOnDestroy(){
    }
}


  
  
