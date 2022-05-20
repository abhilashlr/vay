# Welcome to vay app

To get all the parts of the app up and running, you can simply run (from the root of this application path):

```shell
yarn install
# and then
yarn start
```

You should see a node server booted up in parallel to a simulator and a web app showing a map (If 2 browser tabs do not open, you might have to open `http://localhost:3000` and `http://localhost:3001` in 2 browser tabs. 

On the simulator app, Click on "Simulate" and you should see the live location on the map with 21 vehicle positions. If you then click on "Update" you should see the vehicle update its position in real time. 

On the web app that displays a map, Click on the marker and you would also see the speed of the vehicle. Right now this is a simulated experience, therefor the calculations are not super accurate and the lat long positions are just random along the GPX track.
