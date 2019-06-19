
var width = 500;

var height = 500;

var renderer = new THREE.WebGLRenderer();

var canvas = document.getElementById('canvas');

renderer.setSize( width, height );

canvas.appendChild( renderer.domElement );

main();



function main() {



    var scene = new THREE.Scene();



    var fov = 50;

    var aspect = width / height;

    var near = 1;

    var far = 100;

    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

    camera.position.set( 0, 0, 6 );

    scene.add( camera );



    var light = new THREE.PointLight();

    light.position.set( 10, 1, 1 );

    scene.add( light );





    var vertices = [

        [-1, 1, 1],

        [-1, -1, 1],

        [1, -1, 1],

        [1, 1, 1],

        [-1, 1, -1],

        [-1, -1, -1],

        [1, -1, -1],

        [1, 1, -1]

    ];



    var faces = [

        [0, 1, 2],

        [3, 0, 2],

        [1, 5, 6],

        [2, 1, 6],

        [2, 6, 7],

        [3, 2, 7],

        [3, 7, 4],

        [0, 3, 4],

        [0, 4, 5],

        [1, 0, 5],

        [4, 6, 5],

        [0, 0, 0]

    ];



    var scalars = [

        document.getElementById('slider1o').value,   // S0

        document.getElementById('slider2o').value, // S1

        document.getElementById('slider3o').value,  // S2

        document.getElementById('slider4o').value, //S3

        document.getElementById('slider5o').value,

        document.getElementById('slider6o').value,

        document.getElementById('slider7o').value,

        document.getElementById('slider8o').value

    ];



    // Create color map

    var cmap = [];



    for ( var i = 0; i < 256; i++ )

    {

        var S = i / 255.0; // [0,1]

        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );

        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );

        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );

        var color = new THREE.Color( R, G, B );

        cmap.push( [ S, '0x' + color.getHexString() ] );

    }



    // Draw color map

    var lut = new THREE.Lut( 'rainbow', cmap.length );

    lut.addColorMap( 'mycolormap', cmap );

    lut.changeColorMap( 'mycolormap' );

    scene.add( lut.setLegendOn( {

        'layout':'horizontal',

        'position': { 'x': -0.7, 'y': 1.5, 'z': 2 },

        'dimensions': { 'width': 0.35, 'height': 2.3 }

    } ) );



    var geometry = new THREE.Geometry();

    var material = new THREE.MeshBasicMaterial();



    var nvertices = vertices.length;

    for ( var i = 0; i < nvertices; i++ )

    {

        var vertex = new THREE.Vector3().fromArray( vertices[i] );

        geometry.vertices.push( vertex );

    }



    var nfaces = faces.length;

    for ( var i = 0; i < nfaces; i++ )

    {

        var id = faces[i];

        var face = new THREE.Face3( id[0], id[1], id[2] );

        geometry.faces.push( face );

    }



    var cube = new THREE.Mesh( geometry, material );

    material.vertexColors = THREE.VertexColors;

    for ( var i = 0; i < nfaces; i++ )

    {

        var id = faces[i];

        var S0 = scalars[ id[0] ];

        var S1 = scalars[ id[1] ];

        var S2 = scalars[ id[2] ];

        var C0 = new THREE.Color().setHex( cmap[ S0 ][1] );

        var C1 = new THREE.Color().setHex( cmap[ S1 ][1] );

        var C2 = new THREE.Color().setHex( cmap[ S2 ][1] );

        geometry.faces[i].vertexColors.push( C0 );

        geometry.faces[i].vertexColors.push( C1 );

        geometry.faces[i].vertexColors.push( C2 );

    }



    scene.add( cube );



    loop();



    function loop()

    {

        requestAnimationFrame( loop );

        cube.rotation.x += 0.03;

        cube.rotation.y += 0.03;

        renderer.render( scene, camera );

    }

}
