

export default function Canvas() {
  const imageURL = '../assets/20200128184544-2.png';
  const img = new Image();
  img.src = imageURL;
  img.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    }

  return (
    <div>

    </div>
  )
}  

