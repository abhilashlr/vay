# Welcome to vay app

To get all the parts of the app up and running, you can simply run (from the root of this application path):

```shell
yarn start
```

You should see a node server booted up in parallel to a simulator and a web app showing a map. Click on "Simulate" on the simulator and you should see the live location on the map with 21 vehicle positions. If you then click on "Update" you should see the vehicle vin: 18 update its position in real time. Click on the marker and you would also see the speed of the vehicle. Right now this is a simulated experience, therefor the calculations are not super accurate and the lat long positions are just random on the waypoints.
