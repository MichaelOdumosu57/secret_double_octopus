import {RyberService} from './ryber.service'
import {defer} from 'rxjs'


export class zChildren {
    element:  HTMLElement;
    css:Object | any;
    cssDefault?:Object;
    bool?:string;
    innerText?:null | string;
    link?:string;
    quantity?:any;
    mouseover?:any;
    mouseout?:any;
    Ielement?:any;
    symbol?:Symbol|String
}



let final:any = {}; 


function wait(   ms   ){
    var start = new Date().getTime();
    var end = start;
    while(   end < start + ms   ) {
      end = new Date().getTime();
    }
 }







export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}  

// The RxJS defer() operator returns an observable. 
// It takes a factory function that returns either a promise or an observable. 
// When something subscribes to defer's observable,
//  it adds the subscriber to a new observable created with that factory.


// The defer() operator transforms the Promise.resolve() into a new observable that, 
// like HttpClient, emits once and completes. 
// Subscribers are unsubscribed after they receive the data value.


export class componentObject { // not final
    quantity: any[]; 
    generator?: Generator;
    metadata?: Object | any; 
    init?:any 
}

export function componentBootstrap(   
    devObj:{
        appElement?:zChildren,
        appTV:any,
        css?:Object | any,
        bool?:string,
        cssDefault?:Object,
        classes?:Array<string>,
        myElements?:Element[],
        ryber?:RyberService,
        symbol?:String | Symbol,
        zProps?: any
    }
){


    if(   devObj.zProps === undefined   ){


        devObj.zProps = {}


    }


    let zChild:Object = {'&#8352':devObj.appElement}
    let zGrid = {
        a:0, 
        b:0, 
    }  
    let zCheckpoint = [] 
    devObj.myElements.map((x:any,i:any)=>{
        // console.log( x.nativeElement.className.split(" ")[0],i)
        let j = 0
        while(
            devObj.classes[j] !== undefined
        ){

            
            if(   x.nativeElement.className.split(" ")[0] === devObj.classes[j]   ){
                zCheckpoint.push(i)
                break;
            }


            j += 1
        }
    }) 
    // console.log(zCheckpoint)
    // console.log(zChild)
    zCheckpoint.map((y:any,j:any)=>{
        zGrid.a = 0;
        // console.log(devObj.myElements.length === 1 ? devObj.myElements : devObj.myElements.slice(y,zCheckpoint[j+1]));
        (function(){
            return devObj.myElements.length === 1 ? devObj.myElements : devObj.myElements.slice(y,zCheckpoint[j+1])
        })().map((x:any,i:any)=>{  
            while(   
                devObj.ryber[devObj.appTV].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                zGrid.b +1 > devObj.ryber[devObj.appTV].quantity[1][j].quantity[zGrid.a].length
            ){  
                zGrid.a +=1


                if(   devObj.ryber[devObj.appTV].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined   ){


                    zGrid.b = 0


                }


            }
            // console.log(zGrid,j,i)
            // console.log(devObj.ryber[devObj.appTV].quantity[1][j].bool[zGrid.a][zGrid.b] )
            // console.log(x.nativeElement.className.split(" ")[0] === devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a][zGrid.b] )
        

            while(
                x.nativeElement.className.split(" ")[0] !== devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a][zGrid.b] &&
                devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a][zGrid.b] !== undefined
            ){
                zGrid.b += 1

                if(
                    devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a+1] !== undefined
                ){

                     
                    for(   let i in devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a+1]   ){


                        if(   x.nativeElement.className.split(" ")[0] === devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a+1][i]   ){


                            zGrid.a += 1
                            zGrid.b = parseInt(i)
                            break
                            
                            
                        }


                    }


                }

            }


            if(   x.nativeElement.className.split(" ")[0] === devObj.ryber[devObj.appTV].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                (   
                    devObj.ryber[devObj.appTV].quantity[1][j].bool[zGrid.a][zGrid.b] !== 'false'   
                    // true                      
                )    
            ){               


                zChild[devObj.ryber[devObj.appTV].quantity[1][j].symbol[zGrid.a][zGrid.b]] = {
                    element:x.nativeElement as HTMLElement,
                    css:devObj.ryber[devObj.appTV].quantity[1][j].ngCss[zGrid.a][zGrid.b],
                    innerText: devObj.ryber[devObj.appTV].quantity[1][j].text[zGrid.a][zGrid.b],
                    bool:devObj.ryber[devObj.appTV].quantity[1][j].bool[zGrid.a][zGrid.b],
                    cssDefault:devObj.ryber[devObj.appTV].quantity[1][j].ngCssDefault[zGrid.a][zGrid.b],
                    mouseover:devObj.zProps.mouseover === 'true' ? ( devObj.ryber[devObj.appTV].quantity[1][j].metadata.mouseover !== undefined ? devObj.ryber[devObj.appTV].quantity[1][j].metadata.mouseover[zGrid.a][zGrid.b] : undefined) : undefined ,
                    mouseout: devObj.zProps.mouseout === 'true' ?  ( devObj.ryber[devObj.appTV].quantity[1][j].metadata.mouseout !== undefined ? devObj.ryber[devObj.appTV].quantity[1][j].metadata.mouseout[zGrid.a][zGrid.b] : undefined) : undefined,
                    click: devObj.zProps.click === 'true' ?  ( devObj.ryber[devObj.appTV].quantity[1][j].metadata.click !== undefined ? devObj.ryber[devObj.appTV].quantity[1][j].metadata.click[zGrid.a][zGrid.b] : undefined) : undefined,
                    extras: devObj.zProps.extras === 'true' ?  ( devObj.ryber[devObj.appTV].quantity[1][j].extras !== undefined  ? devObj.ryber[devObj.appTV].quantity[1][j].extras[zGrid.a][zGrid.b] : undefined) : undefined,
                }
                // console.log(zChild)
                

                if(   
                    devObj.ryber[devObj.appTV].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   
                      
                ){


                    zGrid.a += 1
                    zGrid.b = 0       
                    
                    
                }


                
                else if(   true   ){


                    zGrid.b += 1       
                    
                    
                }


            }
            
            
            else if(
                devObj.ryber[devObj.appTV].quantity[1][j].bool[zGrid.a][zGrid.b] === 'false' 
            ){


                if(   devObj.ryber[devObj.appTV].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


                    zGrid.a += 1
                    zGrid.b = 0       
                    
                    
                }


                
                else if(   true   ){


                    zGrid.b += 1       
                    // 
                    
                }
                
                
            }


        })
        
    })   
    // zChild.forEach((x,i)=>{
    //     console.log(x.symbol)
    // }) 
    return zChild  
}
/* test 
1. if I can take anything away from the middle
2. if I can take from a non first subcomponent
3. if I can take from the end of any subcomponent 
4. if I can take several at a time 
5. if you can cancel the end element of a subcomponent element and the beginning element of the next at the same time
work on 2 and 3
*/

/*
desc
zProps, zChild optional props 
 */


export function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

export function eventDispatcher(   devObj:{event:string,element:HTMLElement}   ){
    try {
        let event0= new Event(devObj.event)   
        devObj.element.dispatchEvent(event0)  
    } 
    catch(e){
        let eventLegacy = window.document.createEvent("Event");
        eventLegacy.initEvent(devObj.event, false, true);       
        devObj.element.dispatchEvent(eventLegacy)
    }  
}

export function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

export function resize(   devObj:any   ){
    // console.log(   devObj   )
    let result = null


    if(   devObj.misc === undefined   ){
        devObj.misc = [.12]
    }
    

    if(   devObj.type === 'direct'   ){


        result = 
        (
            devObj.default -
            (
                devObj.containDefault   -
                devObj.containActual    
            ) * 
            devObj.misc[0]
        )


    }
    
    else if(   devObj.type !== 'direct' ){


        result = (
            devObj.default *
            (
                (   
                    (  
                        devObj.containActual  /
                        devObj.containDefault   
                    ) -
                    devObj.misc[0]   
                ) 
            )
        ) 


    }
    return result = result > devObj.default  ? 
        devObj.default :
        result      
}


export function xPosition(devObj){


    if(   devObj.containPos === undefined   ){


        devObj.containPos = .5
        
        
    }


    if(   devObj.targetPos === undefined   ){

        
        devObj.targetPos = .5
        
        
    }
    
    return (    
        (   devObj.contain*devObj.containPos   ) -  
        (   devObj.target*devObj.targetPos   )   
    ) ; 
}


function appGenerateSelector(   devObj   ){
    var a = 0;
    var string = '';
    while(   a!==devObj.times   ){
        string += devObj.val +a+','
        a+=1
    }
    return string.slice(0,-1)
}


// var defaultCO:componentObject 



//Action functions
