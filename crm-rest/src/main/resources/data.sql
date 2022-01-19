INSERT INTO customer (id, name, birth_date, email) VALUES (10001, 'houari', sysdate(), 'admin@houarizegai.net');
INSERT INTO customer (id, name, birth_date, email) VALUES (10002, 'omar', sysdate(), 'omar@houarizegai.net');
INSERT INTO customer (id, name, birth_date, email) VALUES (10003, 'ali', sysdate(), 'ali@houarizegai.net');

INSERT INTO patient (id, name, birth_date, email,gsm) VALUES (10001, '2houari', sysdate(), '2admin@houarizegai.net','12345678');
INSERT INTO patient (id, name, birth_date, email,gsm) VALUES (10002, '2omar', sysdate(), '2omar@houarizegai.net','12345678');
INSERT INTO patient (id, name, birth_date, email,gsm) VALUES (10003, '2ali', sysdate(), '2ali@houarizegai.net','12345678');
INSERT INTO patient (id, name, birth_date, email,gsm) VALUES (10004, '3ali', sysdate(), '3ali@houarizegai.net','12345678');

INSERT INTO appointment(id,patientid,patient_name,speciality,age,appointment_dt,msg,gsm,gender,doctor,doctor_note) VALUES (1,10004,'Ahmed','eye','12', sysdate(),'heeelp','12345678','M','hamdoon','doc notes emepty');
INSERT INTO appointment(id,patientid,patient_name,speciality,age,appointment_dt,msg,gsm,gender,doctor,doctor_note) VALUES (2,10004,'Ahmed','head','12', sysdate(),'heeelped','12345678','M','hamdoon','doc notes emepty');

INSERT INTO appointment(id,patientid,patient_name,speciality,age,appointment_dt,msg,gsm,gender,doctor,doctor_note) VALUES (3,10005,'limona','7mo6a','11', sysdate(),'help I need help','9999999','M','hamdoon','limona need to not leave early');


INSERT INTO contact(id,name,email,gsm,comment) VALUES (1,'ma','asdasd','12314','hi');


INSERT INTO users(id,username,password,role) VALUES (1,'admin','0000','patient');