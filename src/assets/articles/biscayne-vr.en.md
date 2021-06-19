#### Intro

This is a VR project I worked on with my director, Kim. It allows users to explore the splendid landscape in Biscayne Bay. This project would be used for public exhibition, so we decided to only provide users with the headset without controllers. Therefore, the interaction is basically done by gazing at buttons.

As a user, you start with a map, and select a location to experience in 360° videos. For each location, there are overwater and underwater clips. By crouching down, you can go underwater, and by standing up you’ll go above water.

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/biscayne-vr.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Demo Walkthrough</p>
</div>

#### The Ask

Design and develop a VR application for selecting locations on a map to view 360° videos where you can switch between overwater and underwater. All interactions should be done with the Oculus headset without any controllers.

#### The Answer

The development requirements are quite limited, since the content is the majority of it, so a simple design is the way to go. However, it’s difficult to balance between simplicity and an immersive interface. When you’re in VR, you will always expect a lot. Therefore, instead of a flat UI, I make the UI surround the user.

Where to place the UI components is another problem. For example, in a scene, a button is needed for the user to go back to the map, but it's very likely that they lose track of it if it's at a specific spot in the 360° space. To solve this issue, I set its position to be always above the front of the user so that they can easily see it when they look up.
