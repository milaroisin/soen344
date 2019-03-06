import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../../actions/auth'


class PatientMenu extends Component {
  
  render() {
    return (
        <div>
            Welcome Dr. {this.props.user.fname}!
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/CalendarDoctor">
                Book an Appointment
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" onClick={logOut}>
                Logout
            </Link>
        </div>
    );
  }
}


export default PatientMenu;
