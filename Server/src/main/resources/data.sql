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

INSERT INTO client (text, logo) VALUES
('Vattenfall', '/src/img/logos/vattenfall_logo1.png'),
('Tullverket', '/src/img/logos/tullverket_logo.png'),
('Eltel', '/src/img/logos/eltel_logo1.png'),
('Ericsson', '/src/img/logos/ericsson_logo1.png'),
('T-Systems', '/src/img/logos/t-systems_logo1.png'),
('Tunstall', '/src/img/logos/tunstall_logo1.png');


INSERT INTO appointment (room_id, client_id, text, start_Date, end_Date) VALUES
('1', '6', 'Meeting type 2', '2018-10-08 06:00:00', '2018-10-08 07:00:00'),
('5', '1', 'Meeting type 2', '2018-10-08 08:00:00', '2018-10-08 09:00:00'),
('2', '1', 'Meeting type 2', '2018-10-08 09:30:00', '2018-10-08 11:00:00'),
('3', '1', 'Meeting type 3', '2018-10-08 12:00:00', '2018-10-08 13:00:00'),
('4', '2', 'Meeting type 4', '2018-10-08 09:00:00', '2018-10-08 09:30:00'),
('4', '2', 'Meeting type 4', '2018-10-08 10:00:00', '2018-10-08 11:00:00'),
('3', '3', 'Meeting type 1', '2018-10-09 06:00:00', '2018-10-09 07:00:00'),
('4', '5', 'Meeting type 1', '2018-10-09 08:30:00', '2018-10-09 09:30:00'),
('1', '4', 'Meeting type 1', '2018-10-09 09:30:00', '2018-10-09 11:00:00'),
('5', '2', 'Meeting type 5', '2018-10-26 10:00:00', '2018-10-26 11:00:00'),
('4', '3', 'Meeting type 6', '2018-10-26 12:00:00', '2018-10-26 13:35:00'),
('4', '3', 'Meeting type 7', '2018-10-26 14:30:00', '2018-10-26 15:45:00'),
('5', '4', 'Meeting type 8', '2018-10-08 09:30:00', '2018-10-08 13:00:00');