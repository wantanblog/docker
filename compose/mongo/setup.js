const user = {
  user: 'wantan',
  pwd: 'wantan',
  roles: [{
    role: 'readWrite',
    db: 'test'
  }]
};

db.createUser(user);
db.createCollection('doc');
db.doc.insert({
    'name' : 'wantan',
    'num' : '1'
});
db.doc.insert({
    'name' : 'ai',
    'num' : '2'
});
db.doc.insert({
    'name' : 'admin',
    'num' : '3'
});
db.doc.insert({
    'name' : 'docker',
    'num' : '4',
    'type' : 'compose'
});
