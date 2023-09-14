import React from 'react';
import Notification from '../Notification.js';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { Row } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
const NotificationList = () => {
  const notifications = [
    { id: 1, message: 'Notification 1', timestamp: '2023-08-31 10:00 AM'  },
    { id: 2, message: 'Notification 2', timestamp: '2023-08-31 11:30 AM' },
    { id: 3, message: 'Notification 3', timestamp: '2023-08-31 02:15 PM' },
  ];

  return (
    <div className="notification-list">
    <Row>
    <Col lg={12} className='not-col'>
    <span>Notification</span>
    </Col>

  
      {notifications.map(notification => (
        <Notification

          key={notification.id}
          message={notification.message}
         
          timestamp={notification.timestamp}

        />
      ))}
      <Col className='not-col2'>
      <span>See All Notification</span>
      </Col>
      </Row>
    </div>
    
      );
};

export default NotificationList;