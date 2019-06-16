import styles from './DashBoard.scss';
import React, { Component } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Chat from '../Chat';
import DashBoardAdd from '../DashBoardAdd/DashBoardAdd';
import DashboardEdit from '../DashboardEdit/DashboardEdit';
import DashBoardEditProfile from '../DashBoardEditProfile/DashBoardEditProfile';
import DashBoardAllCards from '../DashBoardAllCards/DashBoardAllCards';
import Card from '../Cards/Card';
import DashBoardStats from '../DashBoardStats/DashBoardStats';
import DashBoardAllCardsNotRemembered from '../DashBoardAllCardsNotRemembered/DashBoardAllCardsNotRemembered';
import { isRegExp } from 'util';

export default class DashBoard extends Component {
   render() {
      const url = document.location.href.split('/dashboard')[1];
      return (
         <div>
            <div className="dashboard-container">
                  <div className="dashboard-left-side">
                     <ul>
                        <p>Management Page</p>
                        {url === '' && <li id="nowon"><Link to="/dashboard">Stats</Link></li>}
                        {url !== '' && <li><Link to="/dashboard">Stats</Link></li>}
                        {url === '/all-cards' &&<li id="nowon"><Link to="/dashboard/all-cards">Show All Cards</Link></li>}
                        {url !== '/all-cards' &&<li><Link to="/dashboard/all-cards">Show All Cards</Link></li>}                        
                        {url === '/add' && <li id="nowon"><Link to="/dashboard/add">Add Card</Link></li>}
                        {url !== '/add' && <li><Link to="/dashboard/add">Add Card</Link></li>}                        
                        {url === '/edit-profile' && <li id="nowon"><Link to="/dashboard/edit-profile">Edit Proflie</Link></li>}
                        {url !== '/edit-profile' && <li><Link to="/dashboard/edit-profile">Edit Proflie</Link></li>}
                        {url === '/all-cards-not-remembered' && <li id="nowon"><Link to="/dashboard/all-cards-not-remembered">NOT REMEMBERED</Link></li>}
                        {url !== '/all-cards-not-remembered' && <li><Link to="/dashboard/all-cards-not-remembered">NOT REMEMBERED</Link></li>}
                     </ul>
                  </div>
                  <BrowserRouter>
                     <div className="dashboard-right-side">
                           <Switch>      
                           <Route exact path="/dashboard" component={DashBoardStats} />        
                              <Route path="/dashboard/add" component={DashBoardAdd} />
                              <Route path="/dashboard/edit" component={DashboardEdit} />
                              <Route path="/dashboard/edit-profile" component={DashBoardEditProfile} />
                              <Route path="/dashboard/all-cards" component={DashBoardAllCards} />
                              <Route path="/dashboard/cards/:id" component={Card} />
                              <Route path="/dashboard/all-cards-not-remembered" component={DashBoardAllCardsNotRemembered} />
                           </Switch>
                     </div>
                  </BrowserRouter>
            </div>
          </div>
      )
   }
}
