const ethers = require('ethers');
const express=require('express')
const server=express()
const bodyparser=require('body-parser')
server.use(bodyparser.json())


require('dotenv').config();
const pk=process.env.privateKey
let provider = ethers.getDefaultProvider("rinkeby");
let wallet = new ethers.Wallet(pk,provider)
let bytecode={
	"linkReferences": {},
	"object": "6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006001819055506102578061005b6000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c0100000000000000000000000000000000000000000000000000000000900480631810737a14610058578063f3f73f2214610076575b600080fd5b6100606100a4565b6040518082815260200191505060405180910390f35b6100a26004803603602081101561008c57600080fd5b81019080803590602001909291905050506100ae565b005b6000600154905090565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f72657175697265206f776e6572203d206d73672e73656e64657200000000000081525060200191505060405180910390fd5b6002811115156101ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f71757a206d757374206265203e2032000000000000000000000000000000000081525060200191505060405180910390fd5b806001819055507fe4bf6cd464b69ef26e944a6b10f85e6e9171500173864ae15e2157fa54ab335b816040518082815260200191505060405180910390a15056fea165627a7a7230582084494b2c3541ebf02370f17019318377c267219397c33bf3de2c54077f43b7120029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x1 DUP2 SWAP1 SSTORE POP PUSH2 0x257 DUP1 PUSH2 0x5B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x53 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV DUP1 PUSH4 0x1810737A EQ PUSH2 0x58 JUMPI DUP1 PUSH4 0xF3F73F22 EQ PUSH2 0x76 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x60 PUSH2 0xA4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA2 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x8C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xAE JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO PUSH2 0x172 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE PUSH1 0x1A DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH32 0x72657175697265206F776E6572203D206D73672E73656E646572000000000000 DUP2 MSTORE POP PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 DUP2 GT ISZERO ISZERO PUSH2 0x1EA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE PUSH1 0xF DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH32 0x71757A206D757374206265203E20320000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP PUSH32 0xE4BF6CD464B69EF26E944A6B10F85E6E9171500173864AE15E2157FA54AB335B DUP2 PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP5 0x49 0x4b 0x2c CALLDATALOAD COINBASE 0xeb CREATE 0x23 PUSH17 0xF17019318377C267219397C33BF3DE2C54 SMOD PUSH32 0x43B7120029000000000000000000000000000000000000000000000000000000 ",
	"sourceMap": "26:474:0:-;;;262:10;254:5;;:18;;;;;;;;;;;;;;;;;;282:1;278:3;:5;;;;26:474;;;;;;"
}
let abi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "quz",
				"type": "uint256"
			}
		],
		"name": "baz",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "barisset",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getbar",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

// let factory = new ethers.ContractFactory(abi, bytecode, wallet);
// async function deploythecontract()
// {
//     let contract = await factory.deploy()
//     await contract.deployed()
//     console.log(contract)
// }

// deploythecontract()

let address='0xC3791f2Cda2E9FF298deDC130096B0fBb85A691B'

let contract = new ethers.Contract(address, abi, provider);
let contractWithSigner = contract.connect(wallet);

async function setbaz()
{
	let tx=await contractWithSigner.baz(5)
	console.log(tx)

}
async function getbaz()
{
	let value=await contractWithSigner.getbar()
	console.log("The new value is",value.toNumber())
	return value
}
getbaz()
contractWithSigner.on('barisset',(value)=>
console.log("The value of baz is ",value.toNumber()))
server.get('/getbar',async(request,response)=>
{
	let value=await getbaz()
	response.send(value.toNumber().toString())
})
server.listen(process.env.PORT,()=>{
    console.log("The server is running at",process.env.PORT)})