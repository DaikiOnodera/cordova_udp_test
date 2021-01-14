const dgram = require('dgram');

const PORT_A = 3002;
const HOST_A = '192.168.1.89';

const socket = dgram.createSocket('udp4');

socket.on('listening', () => {
    const address = socket.address();
    console.log('UDP socket listening on ' + address.address + ":" + address.port);
});

socket.on('message', (message, remote) => {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

socket.bind(PORT_A, ()=>{
  socket.addMembership('224.0.0.114');
});
