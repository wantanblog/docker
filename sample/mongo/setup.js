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
