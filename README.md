Image Gallery Threejs
=====================

  Threejs based Gallery/Slider Plugin for JQuery.
  This was forked from djankey's "WebGL Carousel  - Three.js" http://jsdo.it/djankey/carousel_webgl it didn't have jquery handling on it as well as better handling of controls for customization. Works well on IOS ipad and iphone aswell ad desktop PCS.
  
Required Libraries:
-------
**Three.js**
https://github.com/mrdoob/three.js/

**Stats.js**
https://github.com/mrdoob/stats.js/

**TweenMax**
http://www.greensock.com/gsap-js/

**PreloadJS**
http://www.createjs.com/#!/PreloadJS

Browser Compatibility
------
+ Firefox - 30.0.0 +
+ Chrome - 35.0.0 +
+ Explorer: 9 +
+ Ipad Safari: 7.0.0 +
+ Iphone Safari: 7.0.0 +
+ IOS Safari: 7.0.0 +  
+ Android Chrome: not tested help test :)
+ IOS Chrome: not tested help test :)

[Demo](http://image-gallery-threejs.zholpe.com/)
-------

Example
-------

    <script>
    $(function(){
      $('.box').ig3js({
          manifest: [
              {src:"image1.jpg", id:"image1"},
              {src:"image2.jpg", id:"image2"},
              {src:"image3.jpg", id:"image3"},
              {src:"image4.jpg", id:"image4"},
              {src:"image5.jpg", id:"image5"},
              {src:"image6.jpg", id:"image6"},
              {src:"image7.jpg", id:"image7"}
            ],
            imagePath: 'images/'
        });
    });
    </script>
    <div class="box"></div>

Options
-------

<table>
    <tr>
        <th>
            Name
        </th>
        <th>
            Type
        </th>
        <th>
            Default
        </th>
        <th colspan=3>
            Description
        </th>
        <th>
            Example
        </th>
    </tr>
    <tr>
        <td>
            manifest
        </td>
        <td>
            Array
        </td>
        <td>
            Null
        </td>
        <td colspan=3>
            List of image paths
        </td>
        <td>
            [
              {src:"image1.jpg", id:"image1"},
              {src:"image2.jpg", id:"image2"},
              {src:"image3.jpg", id:"image3"},
              {src:"image4.jpg", id:"image4"},
              {src:"image5.jpg", id:"image5"},
              {src:"image6.jpg", id:"image6"},
              {src:"image7.jpg", id:"image7"}
            ]
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            imagePath
        </td>
        <td>
            String
        </td>
        <td>
            Null
        </td>
        <td colspan=4>
            Path to the specific image listings
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            dx
        </td>
        <td>
            Number
        </td>
        <td>
            300
        </td>
        <td colspan=4>
            horizontal spacing of Images
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            dz
        </td>
        <td>
            Number
        </td>
        <td>
            300
        </td>
        <td colspan=4>
            Vertical spacing of Images
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            deltaRotation
        </td>
        <td>
            Number
        </td>
        <td>
            45
        </td>
        <td colspan=4>
            Degress Rotation of the non active images
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            planeSize
        </td>
        <td>
            Number
        </td>
        <td>
            500
        </td>
        <td colspan=4>
            Size of the active plane
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            alphaBackground
        </td>
        <td>
            Boolean
        </td>
        <td>
            true
        </td>
        <td colspan=4>
            Setting if the background is transparent
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            antialias
        </td>
        <td>
            Boolean
        </td>
        <td>
            true
        </td>
        <td colspan=4>
            Setting if the renderer processes the objects with antialias
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td colspan=7>
            progress
        </td>
    </tr>
    <tr>
        <td>
            - light
        </td>
        <td>
            Hex
        </td>
        <td>
            "#ff0000"
        </td>
        <td colspan=4>
            Setting the color of the progress bar's light aspect
        </td>
    </tr>
    <tr>
        <td>
            - ambientLight
        </td>
        <td>
            Hex
        </td>
        <td>
            "#ffffff"
        </td>
        <td colspan=4>
            Setting the color of the progress bar's ambient light aspect
        </td>
    </tr>
    <tr>
        <td>
            - position
        </td>
        <td>
            Array
        </td>
        <td>
            [0,100,0]
        </td>
        <td colspan=4>
            Setting the position of the progress bar
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            stats
        </td>
        <td>
            Boolean
        </td>
        <td>
            false
        </td>
        <td colspan=4>
            sets if stats is shown or hidden.
        </td>
    </tr>
    <tr>
        <td>
            canvasWindow
        </td>
        <td>
            canvas
        </td>
        <td colspan=5>
            sets canvas size
        </td>
    </tr>
</table>

Events
------

<table>
    <tr>
      <td>
        <b>onImageLoadProgress</b>
      </td>
      <td colspan=2>
        Image load progress
      </td>
    </tr>
    <tr>
      <td colspan=3>
      </td>
    </tr>
    <tr>
      <td>
        <b>onImageLoadComplete</b>
      </td>
      <td colspan=2>
        Image load complete
      </td>
    </tr>
    <tr>
      <td colspan=3>
      </td>
    </tr>
    <tr>
      <td>
        <b>onImageLoad</b>
      </td>
      <td colspan=2>
        Image load initialization
      </td>
    </tr>
    <tr>
      <td colspan=3>
      </td>
    </tr>
    <tr>
      <td>
        <b>onNavigateComplete</b>
      </td>
      <td colspan=2>
        Navigation Complete
      </td>
    </tr>
    <tr>
      <td>
      </td>
      <td colspan=2>
        Parameters
      </td>
    </tr>
    <tr>
      <td>
      </td>
      <td>
        obj
      </td>
      <td>
        active plane
      </td>
    </tr>
</table>

Methods
-------

<table>
  <tr>
    <th>
      Execution
    </th>
    <th colspan=3>
      Description
    </th>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.next();
    </td>
    <td colspan=3>
      Animates to the next scene
    </td>
  </tr>
  <tr>
    <td colspan=4>
    </td>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.prev();
    </td>
    <td colspan=3>
      Animates to the previous scene
    </td>
  </tr>
  <tr>
    <td colspan=4>
    </td>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.goTo(&lt;index&gt;);
    </td>
    <td colspan=3>
      Animates to the a specific scene
    </td>
  </tr>
  <tr>
    <td>
    </td>
    <td colspan=3>
      <b>Parameter</b>
    </td>
  </tr>
  <tr>
    <td>
    </td>
    <td>
      index
    </td>
    <td>
      Number
    </td>
    <td>
      base zero position of the plane in an array.
    </td>
  </tr>
  <tr>
    <td>
    </td>
    <td colspan=3>
      <b>Example</b>
    </td>
  </tr>
  <tr>
    <td>
    </td>
    <td colspan=3>
			$(function(){<br/>
			&nbsp; &nbsp; var box = $.ig3js({<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; manifest: [<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {src:&quot;image1.jpg&quot;, id:&quot;image1&quot;},<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {src:&quot;image2.jpg&quot;, id:&quot;image2&quot;},<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {src:&quot;image3.jpg&quot;, id:&quot;image3&quot;},<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; ],<br/>
			&nbsp; &nbsp; &nbsp; &nbsp; imagePath: &#39;images/&#39;,<br/>
			&nbsp; &nbsp; });<br/>
			&nbsp; &nbsp; box.navigate.goTo(2);<br/>
			});<br/><br/>
    </td>
  </tr>
  <tr>
    <td colspan=4>
    </td>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.perspective.default();
    </td>
    <td colspan=3>
      Sets the camera perspective default
    </td>
  </tr>
  <tr>
    <td colspan=4>
    </td>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.perspective.topRight();
    </td>
    <td colspan=3>
      Sets the camera perspective top right
    </td>
  </tr>
  <tr>
    <td colspan=4>
    </td>
  </tr>
  <tr>
    <td>
      &lt;object&gt;.perspective.topLeft();
    </td>
    <td colspan=3>
      Sets the camera perspective top left
    </td>
  </tr>
</table>
