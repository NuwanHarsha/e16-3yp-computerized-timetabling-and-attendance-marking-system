import React, { Component } from 'react';
import NavBar from '../components/navbar'
import TextField from '@material-ui/core/TextField';
import AddStudent from '../components/addStudent'
import StudentCard from '../components/studentCard'
import bgImage from '../images/bg4.jpg'
import '../css/home.css'
import '../css/editGroups.css'
import { withRouter } from 'react-router';

class EditGroups extends Component {
    
    state = {  
        searchWord:null,
        numberList:[],
        eNumbers:[],
    }

    componentDidMount(){
        this.setState({searchWord:''});
        this.setState({numberList:['E/16/242','E/16/268','E/15/366','E/17/226']});
        this.setState({eNumbers:['E/16/243','E/16/267','E/16/367','E/16/225','E/16/229']});
    }

    onSearchValueChanged = e => {
        this.setState({searchWord : e.target.value});
    }



    render() { 
        return (  
            <React.Fragment>
                <NavBar pageName={this.props.match.params.id.toUpperCase()} />
                <img src={bgImage} className="homeloginImg"></img>

                <div className="edtgps-search">
                    <div className="edtgps-search-outer">
                        <TextField id="outlined-search"
                        label="Student Id" 
                        type="search" 
                        variant="outlined" 
                        color="secondary"
                        onChange={e => this.onSearchValueChanged(e)}/>
                        <AddStudent numberList={this.state.numberList} searchWord={this.state.searchWord}></AddStudent>
                    </div>
                </div>

                <div className="edtgps-studentList-outer">
                    <div className="edtgps-studentList">
                        {this.state.eNumbers.map(eNumber => <StudentCard eNbr={eNumber}></StudentCard>)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default EditGroups;