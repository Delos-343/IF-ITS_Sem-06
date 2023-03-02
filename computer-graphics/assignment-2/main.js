
let g;   // A 2D graphics context for drawing on the canvas.

//***************** Functions for drawing the three basic shapes *****************

/**
 * Draws a filled circle of radius 50 (diameter 100) centered at (0,0), 
 * subject to whatever transform(s) have been applied to g.
 */
function circle() {
    g.beginPath();
    g.arc(0,0,17,0,2*Math.PI,false);
    g.fill();
}

/**
 * Draws a filled square with side 100 centered at (0,0), subject
 * to whatever transform(s) have been applied to g.
 */
function square() {
    g.fillRect(-50,-50,100,100);
}

/**
 * Draws a filled triangle with vertices at (-50,50), (50,50), and 
 * (0,-50), subject to whatever transform(s) have been applied to g.
 */
function triangle() {
    g.beginPath();
    g.moveTo(-50,50);
    g.lineTo(50,50);
    g.lineTo(0,-20);
    g.closePath();
    g.fill();
}


//********************************************************************************

/**
 *  The draw() function is called only once, when the page loads.
 */
function draw() {
     g.fillStyle = "black";

     // TODO: Delete the rest of this function, and replace it with code
     // to draw the assigned pictures, using ONLY the functions
     // square(), fillText(), and circle() along with color changes and
     // and transformations !!

     //------------------------------- sample drawing -----------------------------



    // Draw the base of the house

    g.save();
    g.fillStyle = "black";
    g.translate(300,180);
     
    g.save();
    g.rotate(Math.PI/2);
    g.scale(1.5,1);
    square();
    g.restore();
     
    g.restore();

    // Draw the title banner

    g.fillStyle = "red";
    g.fillRect(50,234,500,100);

     g.save();
     g.fillStyle = "black";
     g.translate(300,69);
     triangle(); // draw a triangle, centered at (0,0)
     g.restore();

     // Draw the west walls

     g.save();
     g.fillStyle = "black";
     g.scale(0.117,1);
     g.translate(480,185);
     square();
     g.restore();

     g.save();
     g.fillStyle = "black";
     g.scale(0.117,1);
     g.translate(1100,185);
     square();
     g.restore();

     // Draw the roof of the house

     g.save();
     g.fillStyle = "black";
     g.translate(300,130);
     g.scale(5, 0.117);
     square();
     g.restore();

     // Draw the east walls

     g.save();
     g.fillStyle = "black";
     g.translate(470,185);
     g.scale(0.117, 1);
     square();
     g.restore();

     g.save();
     g.fillStyle = "black";
     g.translate(544,185);
     g.scale(0.117, 1);
     square();
     g.restore();

    // Draw the windows
     
     g.save();
     g.fillStyle = "white";
     g.translate(300,130);
     circle();  // draw a circle of radius 50 centered at (0,0)
     g.restore();

     g.save();
     g.fillStyle = "white";
     g.translate(300,210);
     circle();  // draw a circle of radius 50 centered at (0,0)
     g.restore();

     // draws a red X, consisting of two transformed squares, centered at (0,0)
     // and then moved to the lower right quadrant

     g.save();
     g.fillStyle = "black";
     g.translate(400,185);

     g.save();
     g.rotate(Math.PI/2);
     g.scale(1,0.14);
     square();
     g.restore();

     g.save();
     g.scale(3,0.14);
     square();
     g.restore();

     g.restore();

     // Draw another [black] X

     g.save();
     g.fillStyle = "black";
     g.translate(200,185);

     g.save();
     g.rotate(Math.PI/2);
     g.scale(1,0.14);
     square();
     g.restore();

     g.save();
     g.scale(3,0.14);
     square();
     g.restore();

     g.restore();

     // Add text field

     g.font = "40px Arial";
     g.fillStyle = "white";
     g.textAlign = "center";
     g.fillText("CG IUP Class 2023", canvas.width/2, canvas.height/2);

     g.font = "40px Arial";
     g.fillStyle = "black";
     g.textAlign = "center";
     g.fillText("M Fachry Dwi Handoko", canvas.width/2, canvas.height/1.17);

     g.font = "40px Arial";
     g.fillStyle = "black";
     g.textAlign = "center";
     g.fillText("5025201159", canvas.width/2, canvas.height/1.05);

     //-------------------------------------------------------------------------

 } // end of draw()

   
/**
 * The init() funciton is called after the page has been
 * loaded.  It initializes the canvas and graphics variables,
 * and it calls draw() to draw on the canvas.  If an error
 * occurs, a message is displayed in place of the canvas.
 */
function init() {
    try {
        let canvas = document.getElementById("canvas");
        g = canvas.getContext("2d");
    } catch(e) {
        document.getElementById("canvasholder").innerHTML =
           "<p>Canvas graphics is not supported.<br>" +
           "An error occurred while initializing graphics.</p>";
        return;
    }
    draw();
}

window.onload = init; // arranges for function init to be called when page is loaded
