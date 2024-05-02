# namaste react
#import React from "react" 

class UserClass extends React.component {
    contructor(props){
        super(props);                     //super is used to invoke constructor of superclass that is React.Component
    }

    render(){
        const {name, location} = this.props;

        return (
            <div className ="usercard">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>

            
            
            </div>
        );
    };
};

export defualt UserClass; 