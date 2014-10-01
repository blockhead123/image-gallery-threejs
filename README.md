Image Gallery Threejs
=====================

  Threejs based Gallery/Slider Plugin for JQuery.
  This was forked from djankey's "WebGL Carousel  - Three.js" http://jsdo.it/djankey/carousel_webgl it didn't have jquery handling on it as well as better handling of controls for customization.
  
Version
-------
Alpha 0.0.1
  

[Demo](http://image-gallery-threejs.zholpe.com/)
-------

Example
-------

    <script>
    $(function(){
      $(".box").ig3js({
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
</table>
