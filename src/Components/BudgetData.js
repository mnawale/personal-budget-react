import React from 'react';
import axios from 'axios';

export default class BudgetData extends React.Component {
    state ={
        Budget: [],
    };

    componentDidMount() {
        axios.get('http://localhost:3000/budget') .then(res => {
            console.log(res);
            this.setState({ Budget: res.data });
        });
    }

    render(){
        return
            <ul>
        {this.state.Budget.map(Bdata => <li>{Bdata.MyBudget.title}</li>)}

            </ul>;
        
    }


}