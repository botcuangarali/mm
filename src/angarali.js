const LineConnect = require('./giris');
const LINE = require('./kicker.js');


console.info("\n\
=========================================\n\
KICKER NAME: SIKICI_TR: ULTRAKİCKER\n\
BU BOT ANGARALI MEHMET TARAFINDAN YAPILDI\n\
=========================================\n");
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}


//let client =  new LineConnect();
let client =  new LineConnect(auth);
client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
