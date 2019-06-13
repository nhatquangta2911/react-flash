import styles from './DashBoard.scss';
import React, { Component } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Chat from '../Chat';
import DashBoardAdd from '../DashBoardAdd/DashBoardAdd';
import DashboardEdit from '../DashboardEdit/DashboardEdit';
import DashBoardEditProfile from '../DashBoardEditProfile/DashBoardEditProfile';

export default class DashBoard extends Component {
   render() {
      return (
         <div>
            <div className="dashboard-container">
                  <div className="dashboard-left-side">
                     <ul>
                        <p>Management Page</p>
                        <li><Link to="/dashboard/add">Add Card</Link></li>
                        <li><Link to="/dashboard/edit">Edit Card</Link></li>
                        <li><Link to="/dashboard/edit-profile">Edit Proflie</Link></li>
                     </ul>
                  </div>
                  <BrowserRouter>
                     <div className="dashboard-right-side">
                           <Switch>                    
                              <Route path="/dashboard/add" component={DashBoardAdd} />
                              <Route path="/dashboard/edit" component={DashboardEdit} />
                              <Route path="/dashboard/edit-profile" component={DashBoardEditProfile} />
                           </Switch>
                     </div>
                  </BrowserRouter>
            </div>
          </div>
      )
   }
}
