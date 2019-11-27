//https://github.com/noble/noble/wiki/Getting-started

let noble = require("noble")

noble.on('stateChange', function(state) {

  print(state)
  
    if (state === 'poweredOn') 
    {
      print('bluetooth on')
      let serviceUUIDs = ["0000fe06-0000-1000-8000-00805f9b34fb"]

      noble.startScanning(serviceUUIDs);
    } 
    else 
    {
      print('bluetooth off')
      noble.stopScanning();
    }
  });
  
  noble.on('discover', function(peripheral) {
      console.log('Found device with local name: ' + peripheral.advertisement.localName);
      //console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
      console.log();
  });



