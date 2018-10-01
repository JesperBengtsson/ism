INSERT INTO bundle (name) VALUES
('Bundle 1'),
('Bundle 2');

INSERT INTO slide (bundle_id, name, title, text, image) VALUES
('1', 'Slide 1', 'SITUATION-SMART MOBILITY', 'POWERFUL, PAPER-FREE MANAGED PROCESS', '/src/img/home2.jpg'),
('1', 'Slide 2', 'LOGISTICS', 'SMARTER EQUIPMENT TRACKING', '/src/img/home1.jpg'),
('1', 'Slide 3', 'SMART METER ROLLOUT', 'A PREDEFINED WORKFLOW FOR METER EXCHANGE', '/src/img/home3.jpg'),
('2', 'Slide 4', 'SITUATION-SMART MOBILITY', 'POWERFUL, PAPER-FREE MANAGED PROCESS', '/src/img/home4.jpg'),
('2', 'Slide 5', 'AUTOMATED APPOINTMENT BOOKING', 'WITH TRUE EFFICIENCY BUILT-IN', '/src/img/home5.jpg');

INSERT INTO room (text, color, image) VALUES
('Room Blue', '#425fac', './src/img/blue.png'),
('Room Red', '#dd2235', './src/img/red.png'),
('Room 101', '#8dca93', './src/img/green.png'),
('Room 404', '#e1c539', './src/img/yellow.png'),
('Conference Room', '#9bc7df', './src/img/teal.png');

INSERT INTO client (text) VALUES
('Vattenfall'),
('Tullverket'),
('Eltel'),
('IBM');


INSERT INTO appointment (room_id, client_id, text, start_Date, end_Date, recurrence_Rule) VALUES
('1', '4', 'Meeting type 1', '2018-09-02 09:30:00', '2018-09-02 11:00:00', 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10'),
('2', '1', 'Meeting type 2', '2018-09-01 09:30:00', '2018-09-01 11:00:00', 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10'),
('3', '1', 'Meeting type 3', '2018-09-01 12:00:00', '2018-09-01 13:00:00', 'FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2'),
('4', '2', 'Meeting type 4', '2018-09-01 09:00:00', '2018-09-01 09:15:00', 'FREQ=DAILY;BYDAY=WE;UNTIL=20190601'),
('5', '2', 'Meeting type 5', '2018-09-26 10:00:00', '2018-09-26 11:00:00', 'FREQ=YEARLY;BYWEEKNO=23'),
('4', '3', 'Meeting type 6', '2018-09-26 12:00:00', '2018-09-26 13:35:00', 'FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR'),
('4', '3', 'Meeting type 7', '2018-09-26 14:30:00', '2018-09-26 15:45:00', 'FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1'),
('5', '4', 'Meeting type 8', '2018-09-01 09:30:00', '2018-09-01 13:00:00', 'FREQ=YEARLY;BYYEARDAY=148');