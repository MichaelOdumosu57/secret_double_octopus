import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
// import { Router,RouterEvent } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { zChildren, componentObject,numberParse } from './customExports';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RyberService {


    constructor(
        // private router:Router
        private http:HttpClient
    ) { };

    appCurrentNav:string = '/home'
    appReloaded:string = 'true'
    // appRouterEvent$:Observable<any> = this.router.events    
    appRouterEventSubscription0:Subscription
    appSubscriptionArray:Subscription[] = []
    appViewComplete:Subject<any> =  new  Subject<any>()
    appViewCompleteArray:Array<any> = []
    appEventListener:Function = (a)=>{
        

        if(   typeof a === 'function'   ){


            a()


        }


    }
    appTestKeyword = 'root'   
    appTV = '' 
    /* */

    /*login */

        // loginComponent concept metadata 
        loginList:Array<any>
        loginStateAbbrev:Array<any>
        loginListPost:Observable<any> = this.http.post<any>("http://localhost:3002/login_ex",'testing123')
        .pipe(
            tap((a:any)=> {
                console.log('http success!')           
                return a
            }),  // return the string instead
            catchError(
                ((operation = 'operation', result?: any)=>{
                return (error: any): Observable<any> => {
        

                return of([]);
                }
            })('getStates', []))
        )        
        //

        // loginComponent events
        loginLoadEvent$:Observable<Event>
        loginLoadEventSubscription0:Subscription
        loginLoadEventSubscription1:Subscription 
        loginResizeEvent$:Observable<Event>
        loginResizeEventSubscription0:Subscription  
        loginClickEvent$:Observable<Event>        
        loginClickEventSubscription0:Subscription
        loginClickEventSubscription1:Subscription
        loginInputEvent$:Observable<Event> 
        loginInputEventSubscription0:Subscription 
        loginInputEventSubscription1:Subscription       
        // 


  

        // loginComponent Instances
        loginMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        loginMyElementsArray: any[] = [];        
        loginCO0:componentObject ={ 
            metadata:{

            },
            generator:(function(){
                return function *generator() {
                    var index = 8352;
                    while (true)
                    yield index++;
                }()
            })(),            
            quantity:[
                [
                    {
                        signature:'app',
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['l_o_g_i_n_App']
                        ], 
                        text:[
                                []
                        ],
                        symbol:[['&#8352']],
                        metadata:{
                            mouseover:[
                                [],
                                [],
                                []
                            ],
                            mouseout:[
                                [],
                                [],
                                []
                            ]                            
                        },
                        ngCss:[
                            [
                                {
                                    
                                    top:'0px',
                                    width:'100%',
                                    'z-index':'1'
                                }
                            ]                         
                        ],                  
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ]
                    }                    
                ],
                [
                    {
                            signature:'containing',
                            quantity:[[3]],
                            bool:[['div']], 
                            val:[
                                ['l_o_g_i_n_Board'],
                            ], 
                            text:[
                                [],
                            ],
                            symbol:[['&#8353']],
                            metadata:{                                                              
                            },
                            ngCss:[
                                [
                                    {
                                        
                                        height:'100%',
                                        width:'100%',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 255, 255)',
                                        // 'background-color':'rgb(255, 230, 255)', tertiary
                                        // 'background-color':'rgb(42,52,61)', secondary
                                        // top:'50px',
                                        // left:'200px',
                                        // border:'2px solid black',
                                        // 'border-radius': (
                                        //     window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        //  )
                                    }                                    
                                ]                    
                            ],                  
                            extras:[
                                [
                                    {}
                                ],
                                [],
                                []                       
                            ]
                    },                     
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'end user input',
                            quantity:[[],[3,3,3,3],[3]],
                            bool:[
                                [],
                                ['p','p','i','i'],
                                ['button']], 
                            val:[
                                [],
                                [
                                    'l_o_g_i_n_UserLabel',
                                    'l_o_g_i_n_PasswordLabel',
                                    'l_o_g_i_n_Username',   
                                    'l_o_g_i_n_Password',                              
                                ],
                                [
                                    'l_o_g_i_n_Submit'
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Username",
                                    "Password"
                                ],
                                [
                                    "Submit"
                                ]
                            ],
                            symbol:[
                                [],
                                [
                                    '&#8354',
                                    '&#8355',
                                    '&#8356',
                                    '&#8357'
                                ],
                                ['&#8358']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    [
                                        'assets/media/zoom_0.mp4'
                                    ]
                                ],
                                placeholder:[
                                    [],
                                    [],
                                    []
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        left:'400px',
                                        top:'220px',
                                        'font-family':'Arial'
                                    },
                                    {
                                        left:'400px',
                                        top:'300px',
                                        'font-family':'Arial'                                        
                                    },     
                                    {
                                        left:'400px',
                                        height:'33px',
                                        width:'400px',
                                        'font-size':'33px',
                                        top:'260px',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '5px' : null
                                        ),                                                                                 
                                    },
                                    {
                                        left:'400px',
                                        height:'33px',
                                        width:'400px',
                                        top:'340px',
                                        'font-size':'33px',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '5px' : null
                                        ),                                                                                    
                                    }                                                                                                                                                                                                                                                                                            
                                ],
                                [
                                    {
                                        
                                        height:'50px',
                                        width:'250px',
                                        'z-index':'1',
                                        'background-color':'rgb(0,123,255)',
                                        border:'1px solid grey',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '10px' : null
                                        ),            
                                        'font-family':'Arial',   
                                        'font-size':'42px',     
                                        left:'400px',
                                        top:'400px'                       
                                    }                                                                       
                                ]                    
                            ],      
                            extras:[
                                [],
                                [],
                                [
                                    ...Array.from(Array(0),()=> { return 
                                        {}
                                    }),  
                                ]                      
                            ]
                    }}),                                                                                                                                                                                              
                ]
            ],       
        };         
        loginCO0init:void= ((a)=> {
            for(let i = 0; i !== a.loginCO0.quantity.length; i++){
                for(let j = 0; j !== a.loginCO0.quantity[i].length; j++){
                    a.loginCO0.quantity[i][j].ngCssDefault = JSON.parse(   JSON.stringify(   a.loginCO0.quantity[i][j].ngCss   )   )
                }                    
            }
        })(this)       
        //        
    /* */

    /*panel */

        // PanelComponent events
        panelLoadEvent$:Observable<Event>
        panelLoadEventSubscription0:Subscription
        panelLoadEventSubscription1:Subscription 
        panelResizeEvent$:Observable<Event>
        panelResizeEventSubscription0:Subscription
        panelResizeEventSubscription1:Subscription
        panelResizeEventSubscription2:Subscription
        panelResizeEventSubscription3:Subscription
        panelResizeEventSubscription4:Subscription
        panelResizeEventSubscription5:Subscription
        panelResizeEventSubscription6:Subscription
        panelResizeEventSubscription7:Subscription
        panelResizeEventSubscription8:Subscription
        panelResizeEventSubscription9:Subscription        
        panelClickEvent$:Observable<Event>        
        panelClickEventSubscription0:Subscription
        // 


        // PanelComponent Instances
        panelMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        panelMyElementsArray: any[] = [];        
        panelCO0:componentObject ={
            metadata:{
            },
            generator:(function(){
                return function *generator() {
                    var index = 8352;
                    while (true)
                    yield index++;
                }()
            })(),            
            quantity:[
                [
                    {
                        signature:'app',
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['p_a_n_e_l_App']
                        ], 
                        text:[
                                []
                        ],
                        set symbols(a) {
                            this.symbol.push(
                                Array.from(Array(1),()=> {
                                    return '&#'+this.CO.generator.next().value 
                                })
                            )
                        },
                        symbol:[],
                        metadata:{
                            mouseover:[
                                [],
                                [],
                                []
                            ],
                            mouseout:[
                                [],
                                [],
                                []
                            ]                            
                        },
                        ngCss:[
                            [
                                {
                                    
                                    top:'0px',
                                    width:'100%',
                                    'z-index':'1'
                                }
                            ]                         
                        ],                  
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ]
                    }                    
                ],
                [
                    {
                            signature:'containing',
                            quantity:[[3]],
                            bool:[['div']], 
                            val:[
                                ['p_a_n_e_l_Board'],
                            ], 
                            text:[
                                [],
                            ],
                            set symbols(a) {
                                this.symbol.push(
                                    Array.from(Array(1),()=> {
                                        return '&#'+this.CO.generator.next().value 
                                    })
                                )
                            },
                            symbol:[],
                            metadata:{                                                              
                            },
                            ngCss:[
                                [
                                    {
                                        
                                        height:'500px',
                                        width:'800px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 230, 255)',
                                        // 'background-color':'rgb(42,52,61)', secondary
                                        top:'50px',
                                        left:'250px',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        ),
                                       
                                    }                                    
                                ]                    
                            ],                  
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ]
                    },                     
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'heading',
                            quantity:[[],[3],[3]],
                            bool:[[],['h1'],['video']], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',                              
                                ],
                                [
                                    'p_a_n_e_l_Videoground'
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "My works",
                                ],
                                []
                            ],
                            set symbols(a) {
                                this.symbol.push([])                           
                                this.symbol.push(
                                    Array.from(Array(1),()=> {
                                        return '&#'+this.CO.generator.next().value 
                                    })
                                )  
                                this.symbol.push(
                                    Array.from(Array(1),()=> {
                                        return '&#'+this.CO.generator.next().value 
                                    })
                                )                                                              
                            },
                            symbol:[],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    [
                                        'assets/media/zoom_0.mp4'
                                    ]
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'520.5px',
                                        top:'50px'
        
                                    }                                                                                                                                                                                                                                                        
                                ],
                                [
                                    {
                                        
                                        // height:'750px',
                                        width:'850px',
                                        'z-index':'1',
                                        top:'150px',
                                        left:'200px'
                                    }                                                                       
                                ]                    
                            ],      
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ]
                    }}),                                                                                                                  
                ]
            ],       
        };         
        panelCO0init:void= ((a)=> {
            for(let i = 0; i !== a.panelCO0.quantity.length; i++){
                for(let j = 0; j !== a.panelCO0.quantity[i].length; j++){
                    a.panelCO0.quantity[i][j].CO = a.panelCO0
                    a.panelCO0.quantity[i][j].symbols = 'a'
                    a.panelCO0.quantity[i][j].ngCssDefault =  JSON.parse(   JSON.stringify(   a.panelCO0.quantity[i][j].ngCss   )   )
                }                    
            }
        })(this)        
        //        
    /* */

}
