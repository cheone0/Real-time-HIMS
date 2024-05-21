//시간 알려주는 함수
function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function displayCurrentTime() {
    document.getElementById('current-time').textContent = getCurrentTime();
}

// DOMContentLoaded 이벤트를 사용하여 페이지 로드 후에 함수를 호출합니다.
document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentTime();
});



//버튼 클릭시
$('.btn').on('click', function() {
    $(this).toggleClass('a');
  });


// 버튼 요소 선택
let buttonClick = document.querySelector(".leftArrow");

// 배너 요소 선택
let banner = document.querySelector(".bottom-banner");

// 클릭 이벤트 핸들러 등록
buttonClick.addEventListener("click", function() {
    // 배너가 보이는지 확인
    let isBannerVisible = banner.style.display !== "none";
    
    // 배너를 토글 (보이는 경우 숨기고, 숨겨진 경우 보이기)
    banner.style.display = isBannerVisible ? "none" : "block";
});



// 아코디언메뉴
document.getElementById("rightMenu").addEventListener("click", function() {
  var accordionMenu = document.getElementById("accordionMenu");
  if (accordionMenu.style.display === "none" || accordionMenu.style.display === "") {
      accordionMenu.style.display = "block";
  } else {
      accordionMenu.style.display = "none";
  }
});


//지도함수
let map;
let featureLayer;
// initMap is now async
async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    // Short namespaces can be used.
    map = new Map(document.getElementById("map"), {
        center: { lat: 19.806692123413086, lng: 105.7851791381836 },
        zoom: 14,
        // mapId: '6bb7b904a675912c',
        styles: [
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
                // mapId: '6bb7b904a675912c'
            }
          ]
          
    });

    const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: { lat: 19.806692123413086, lng: 105.7851791381836 },
      });

}



window.initMap = initMap();

