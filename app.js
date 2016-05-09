console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name : string
// account.username : string / email
// account.password : string

function createAccount(account){
    var accounts = storage.getItemSync('accounts');

    if(typeof accounts == 'undefined'){
        accounts = [];
    }

    accounts.push(account);

    storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');
    var matchedName;

    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].name == accountName){
            matchedName = accounts[i];
        }

    }

    return matchedName;
}

var account1= {
    name:'brandon',
    username:'hoerresb',
    password:'password'
};

var account2 = {
    name:'brandon22',
    username:'hoerres22',
    password:'password22'
};

var fa = createAccount(account1);

console.log(fa);

var accountName = getAccount('brandon');

console.log(accountName);