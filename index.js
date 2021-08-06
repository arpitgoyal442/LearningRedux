

const redux=require("redux");

//used to create redux-store
const createStore=redux.createStore;


//Setting the initial state(basically a js object) 
const initialState={

    noOfCakes:10
}

//action-creator  returning a action(basically a js object having "type" property)
function buyCake(){

    return{

        type:"BUY_CAKE",
        info:"buying cake"
    }
}

//Making reducer --> take initial state and action and send new state to store
const reducer= (state=initialState,action)=>{

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

const store= createStore(reducer);
console.log(store.getState());

//To listen for changes in store
store.subscribe(()=>console.log(store.getState()));

//To change state in store
store.dispatch(buyCake());





