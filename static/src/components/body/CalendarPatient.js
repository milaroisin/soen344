import {Component} from "react";
import React from "react";
import { Calendar, Alert , Table, Button, Tabs, Radio, Typography, Divider} from 'antd';
import * as moment from 'moment';
import 'antd/es/calendar/style/index.css';
import 'antd/es/alert/style/index.css';
import 'antd/es/table/style/index.css';
import 'antd/es/divider/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/pagination/style/index.css';
import 'antd/es/icon/style/index.css';
import 'antd/es/tabs/style/index.css';
import 'antd/es/radio/style/index.css';
import 'antd/es/typography/style/index.css';

class CalendarPatient extends Component {

    state = {
        current : moment(),
        value: moment(),
        selectedValue: moment(),
    }

    onSelect = (value) => {
        this.setState({
        value,
        selectedValue: value,
        });
    }

    onPanelChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { current, value, selectedValue } = this.state;
        let message, success;

        if (selectedValue < current) {
            message = "You cannot select a previous date to book an appointment";
            success = false;
        } else
        {
            message = "You selected date: " + selectedValue.format('YYYY-MM-DD');
            success = true;
        }

        return (
            <table>
                <tr><td><Alert message={message}/></td></tr>
                <tr>
                    <td><div><Calendar style={{width:300, height:200}} value={value} fullscreen={false}  onSelect={this.onSelect} onPanelChange={this.onPanelChange}/></div></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{width:'100%'}}><AppointmentTable success={success} value={selectedValue}/></td>
                </tr>
            </table>
        );
    }

}

function AppointmentTable(props) {

    const columns = [{
      title: 'Time',
      dataIndex: 'time',
    }, {
      dataIndex: "button"
    }];

    const data = [{
      time: moment().format('HH:mm A') + " - " + (moment().add(20, 'minutes')).format('HH:mm A'),
      button: <Button type="primary" icon="plus" size="large">ADD TO CART</Button>
    },
    {
      time: moment().format('HH:mm A') + " - " + (moment().add(20, 'minutes')).format('HH:mm A'),
      button: <Button type="primary" icon="plus" size="large">ADD TO CART</Button>
    }
    ];


    if (!props.success) {
        return null;
    }
    return (
        <div>
            <h2>Available Appointments for {props.value.format('YYYY-MM-DD')}</h2>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
    );
}

export default CalendarPatient;