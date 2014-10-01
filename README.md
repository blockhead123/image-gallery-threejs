Image Gallery Threejs
=====================

  Threejs based Gallery/Slider Plugin for JQuery
  

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
        <th colspan=3>
            Description
        </th>
    </tr>
    <tr>
        <td>
            manifest
        </td>
        <td>
            Array
        </td>
        <td colspan=3>
            List of image paths
        </td>
    </tr>
</table>
