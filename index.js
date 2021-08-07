

const redux=require("redux");
const combineReducers=redux.combineReducers;

//used to create redux-store
const createStore=redux.createStore;


//Setting the initial state(basically a js object) 
const cakeinitialState={

    noOfCakes:10
    
}

const iceCreaminitialState={

    
    noOfIceCreams:20
}



//action-creator  returning a action(basically a js object having "type" property)
function buyCake(){

    return{

        type:"BUY_CAKE",
        info:"buying cake"
    }
}

function buyIceCream(){

    return{

        type:"BUY_ICE_CREAM"
        
    }
}

//Making reducer --> take initial state and action and send new state to store
const cakereducer= (state=cakeinitialState,action)=>{

    switch(action.type){

        case "BUY_CAKE":
        return{
            ...state,
            noOfCakes:state.noOfCakes-1
        }

       

        default:
            return state
    }


}

//Another Reducer To manage Just Icreams
const iceCreamreducer= (state=iceCreaminitialState,action)=>{

    switch(action.type){

      
        case "BUY_ICE_CREAM":
            return{
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }


        default:
            return state
    }


}

//It is Convention to say all the reducers combined as ROOT Reducer
const rootReducer=combineReducers({
    cake:cakereducer,
    Ice:iceCreamreducer
})
const store= createStore(rootReducer);
console.log(store.getState());

//To listen for changes in store
store.subscribe(()=>console.log(store.getState()));

//To change state in store
store.dispatch(buyCake());
store.dispatch(buyIceCream());





