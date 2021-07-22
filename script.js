function redirect(){
    var number = document.getElementById("Number").value
    var text="https://card.digitronglobal.com/Lodhiya-and-Son's-Jewellers"
    window.location.href = "https://wa.me/" + number + "?text=" + text; 
}
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(19.94631,79.2947035),
      zoom:17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    