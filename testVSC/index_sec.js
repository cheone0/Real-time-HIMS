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
    document
        .getElementById('current-time')
        .textContent = getCurrentTime();
}

// DOMContentLoaded 이벤트를 사용하여 페이지 로드 후에 함수를 호출합니다.
document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentTime();
});

//버튼 클릭시
$('.btn').on('click', function () {
    $(this).toggleClass('a');
});

// 버튼 요소 선택
let buttonClick = document.querySelector(".leftArrow");

// 배너 요소 선택
let banner = document.querySelector(".bottom-banner");

// 클릭 이벤트 핸들러 등록
buttonClick.addEventListener("click", function () {
    // 배너가 보이는지 확인
    let isBannerVisible = banner.style.display !== "none";

    // 배너를 토글 (보이는 경우 숨기고, 숨겨진 경우 보이기)
    banner.style.display = isBannerVisible
        ? "none"
        : "block";
});

// 아코디언메뉴
document
    .getElementById("rightMenu")
    .addEventListener("click", function () {
        var accordionMenu = document.getElementById("accordionMenu");
        if (accordionMenu.style.display === "none" || accordionMenu.style.display === "") {
            accordionMenu.style.display = "block";
        } else {
            accordionMenu.style.display = "none";
        }
    });

let rainfallStation = [
    "Song Muc",
    "Yen My",
    "Cum Ho Chua Mang",
    "Ho Cong Coc",
    "Ho Duong Coc",
    "Ho Thung Bang",
    "Ho Xuan Lung",
    "Ho Binh Cong",
    "Ho Dong Ngu",
    "Ho Cua Trat",
    "Ho Dong Be",
    "Ho Hao Hao",
    "Ho Ben Quan",
    "Thọ Xuân",
    "Tram Bom Yen Ton",
    "Tram Bom Phu Ninh",
    "Dap Dieu Thieu Ngoc",
    "Trans BC DW"
];
//Rainfall Station 테이블생성
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#dynamic-table tbody');
    const spanElement = document.querySelector('.middleMenuTopBanner span'); // span 요소 선택

    for (let i = 0; i < 18; i++) {
        const row = document.createElement('tr');
        // 첫 번째 열에 rainfallStation 배열의 값을 넣기
        const stationIndex = i % rainfallStation.length; // 인덱스가 배열 범위를 넘어가면 다시 처음부터 시작
        const cell = document.createElement('td');

        cell.textContent = rainfallStation[stationIndex];
        row.appendChild(cell);

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            cell.textContent = `0.0`;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
    // 테이블의 모든 셀에 클릭 이벤트 리스너 추가
    tableBody.addEventListener('click', function (event) {

        const middleMenusView = document.querySelectorAll('.middleMenu');
        middleMenusView.forEach(function (element) {
            element.style.display = 'block';
        });
        if (event.target.tagName === 'TD') {

            spanElement.textContent = event.target.textContent;
        }
    });
});
//Water Level Stations 테이블생성
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#dynamic-table2 tbody');

    // 아이콘 이미지 배열
    const iconImages = ['icons8-arrow-25.png', 'icons8-arrow-24.png', 'icons8-stop-24.png'];

    for (let i = 0; i < 18; i++) {
        const row = document.createElement('tr');

        // 첫 번째 열에 rainfallStation 배열의 값을 넣기
        const stationIndex = i % rainfallStation.length; // 인덱스가 배열 범위를 넘어가면 다시 처음부터 시작
        const cell = document.createElement('td');
        cell.textContent = rainfallStation[stationIndex];
        row.appendChild(cell);

        // 두 번째 열에 무작위 숫자와 무작위 아이콘 사진 추가
        const iconCell = document.createElement('td');
        const randomNumber = (Math.random() * 6).toFixed(1); // 0에서 6 사이의 무작위 실수 생성
        const randomImageIndex = Math.floor(Math.random() * iconImages.length); // 이미지 배열의 인덱스 무작위 선택
        const iconImage = document.createElement('img');
        iconImage.src = '/' + iconImages[randomImageIndex]; // 무작위 아이콘 이미지 경로 설정
        const textNode = document.createTextNode(randomNumber + ' ');

        // 텍스트와 이미지를 함께 넣기
        iconCell.appendChild(textNode);
        iconCell.appendChild(iconImage);
        row.appendChild(iconCell);

        // 세 번째 열에 무작위 숫자 추가
        const thirdCell = document.createElement('td');
        const randomValue = (Math.random() * 6).toFixed(1); // 0에서 6 사이의 무작위 실수 생성
        thirdCell.textContent = randomValue;
        row.appendChild(thirdCell);

        tableBody.appendChild(row);
    }
});

//Warning Reports 테이블생성
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#dynamic-table3 tbody');

    for (let i = 0; i < 18; i++) {
        const row = document.createElement('tr');

        // 첫 번째 열에 rainfallStation 배열의 값을 넣기
        const stationIndex = i % rainfallStation.length;
        const cell1 = document.createElement('td');
        cell1.textContent = rainfallStation[stationIndex];
        row.appendChild(cell1);

        // 두 번째 열에 Rainfall 또는 Water Level을 무작위로 설정하기
        const cell2 = document.createElement('td');
        const randomType = Math.random() < 0.5
            ? 'Rainfall'
            : 'Water Level';
        cell2.textContent = randomType;
        row.appendChild(cell2);

        // 세 번째 열에 Normal 값 설정하기
        const cell3 = document.createElement('td');
        cell3.textContent = 'Normal';
        row.appendChild(cell3);

        tableBody.appendChild(row);
    }
});

//CCTV 테이블생성
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('.fourTable tbody');
    const middleMenuBody1 = document.querySelector('.middleMenuCCTV-body1');

    for (let i = 0; i < 18; i++) {
        const row = document.createElement('tr');

        // 첫 번째 열에 체크박스 추가
        const checkboxCell = document.createElement('td');
        checkboxCell.innerHTML = '<input type="checkbox">';
        row.appendChild(checkboxCell);

        // 두 번째 열에 rainfallStation 배열의 값을 넣기
        const stationIndex = i % rainfallStation.length;
        const cell2 = document.createElement('td');
        cell2.textContent = rainfallStation[stationIndex];
        row.appendChild(cell2);

        tableBody.appendChild(row);
    }

    // 테이블의 모든 체크박스에 클릭 이벤트 리스너 추가
    tableBody.addEventListener('click', function (event) {
        if (event.target.type === 'checkbox') {
            const checkbox = event.target;
            const row = checkbox.closest('tr');
            const secondCell = row.children[1]; // 두 번째 열

            if (checkbox.checked) {
                // 체크박스가 체크되었을 때
                const newCardHTML = `
                    <div class="card cardCCTV" style="height: 250px; width: 300px;">
                        <div class="cardTitle">${secondCell.textContent}</div>
                        <div>
                            <img src="/manggom.png" class="card-img-bottom">
                        </div>
                    </div>
                `;

                // HTML 문자열을 요소로 변환하여 추가
                middleMenuBody1.insertAdjacentHTML('beforeend', newCardHTML);
            } else {
                // 체크박스가 체크 해제되었을 때
                const cards = middleMenuBody1.querySelectorAll('.card');
                cards.forEach(card => {
                    if (card.querySelector('.cardTitle').textContent === secondCell.textContent) {
                        card.remove();
                    }
                });
            }

            const middleMenusCCTVView = document.querySelectorAll('.middleMenuCCTV');
            middleMenusCCTVView.forEach(function (element) {
                element.style.display = 'block';
            });
        }
    });
});

//select-rainfall 선택하면 테이블 보이고 사라지게 하기
function showRainfallTables() {
    // Rainfall 테이블들을 감싸고 있는 부모 요소를 선택합니다.
    const baseTable = document.getElementById('baseTable');

    // Rainfall 테이블들을 감싸고 있는 각각의 div 요소를 숨깁니다.
    const rainfallTables = baseTable.querySelectorAll(
        '.firstTable, .secTable, .thirTable'
    );
    rainfallTables.forEach(table => {
        table.style.display = 'none';
    });

    // 마지막에는 firstTable 클래스를 가진 요소만 보이도록 설정합니다.
    const firstTable = baseTable.querySelector('.firstTable');
    firstTable.style.display = 'block';

    // table-container의 높이를 100으로 변경합니다.
    const tableContainer = firstTable.querySelector('.table-container');
    tableContainer.style.height = '100%';
    //Operation Agency 생기게 하는거
    const element = document.getElementById('donshow');
    element
        .classList
        .remove('donshow');

}

//select-waterLevel 선택하면 테이블 보이고 사라지게 하기
function showWaterLevellTables() {
    // Rainfall 테이블들을 감싸고 있는 부모 요소를 선택합니다.
    const baseTable = document.getElementById('baseTable');

    // Rainfall 테이블들을 감싸고 있는 각각의 div 요소를 숨깁니다.
    const rainfallTables = baseTable.querySelectorAll(
        '.firstTable, .secTable, .thirTable'
    );
    rainfallTables.forEach(table => {
        table.style.display = 'none';
    });

    // 마지막에는 firstTable 클래스를 가진 요소만 보이도록 설정합니다.
    const firstTable = baseTable.querySelector('.secTable');
    firstTable.style.display = 'block';

    // table-container의 높이를 100으로 변경합니다.
    const tableContainer = firstTable.querySelector('.table-container');
    tableContainer.style.height = '100%';
    //Operation Agency 생기게 하는거
    const element = document.getElementById('donshow');
    element
        .classList
        .remove('donshow');
}

//select all 선택
function showAllTables() {
    // 모든 테이블을 보이도록 설정합니다.
    const baseTable = document.getElementById('baseTable');
    const tables = baseTable.querySelectorAll('.firstTable, .secTable, .thirTable');
    tables.forEach(table => {
        table.style.display = 'block';
    });

    // table-container의 높이를 다시 400px로 설정합니다.
    const tableContainers = baseTable.querySelectorAll('.table-container');
    tableContainers.forEach(container => {
        container.style.height = '400px';
    });
    const element = document.getElementById('donshow');
    element
        .classList
        .add('donshow');
}

//CCTV 선택하면 테이블 보이고 사라지게 하기
function CCTVTables() {
    // Rainfall 테이블들을 감싸고 있는 부모 요소를 선택합니다.
    const baseTable = document.getElementById('baseTable');

    // Rainfall 테이블들을 감싸고 있는 각각의 div 요소를 숨깁니다.
    const rainfallTables = baseTable.querySelectorAll(
        '.firstTable, .secTable, .thirTable'
    );
    rainfallTables.forEach(table => {
        table.style.display = 'none';
    });

    // 마지막에는 firstTable 클래스를 가진 요소만 보이도록 설정합니다.
    const fourTable = baseTable.querySelector('.fourTable');
    fourTable.style.display = 'block';

    //Operation Agency 생기게 하는거
    const element = document.getElementById('donshow');
    element
        .classList
        .remove('donshow');
}

//중간 배너 표 생성
function makeGraph() {
    const tbody = document.querySelector('#dynamic-table55 tbody');
    const startDate = new Date(document.getElementById('start').value);
    const endDate = new Date(document.getElementById('end').value);

    // 시작 날짜가 종료 날짜보다 미래인지 확인
    if (startDate.getTime() >= endDate.getTime()) {
        console.error("종료 날짜는 시작 날짜보다 미래여야 합니다.");
        return;
    }

    // 이전 테이블 열을 지웁니다
    tbody.innerHTML = '';

    // 시작 날짜부터 종료 날짜까지 각 날짜별로 열을 생성합니다
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        // 새로운 열을 생성합니다
        const tr = document.createElement('tr');

        // 날짜를 표시하는 첫 번째 셀을 생성하고 추가합니다
        const dateCell = document.createElement('td');
        dateCell.textContent = currentDate
            .toISOString()
            .split('T')[0]; // 형식: YYYY-MM-DD
        tr.appendChild(dateCell);

        // 나머지 세 개의 열에는 모두 0을 넣어줍니다
        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td');
            td.textContent = '0';
            tr.appendChild(td);
        }

        // 테이블에 열을 추가합니다
        tbody.appendChild(tr);

        // 다음 날짜로 이동합니다 
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Close 이미지를 클릭했을 때 이벤트 처리
const closeImg = document.getElementById('closeIMG');
closeImg.addEventListener('click', function () {
    // middleMenu 클래스를 가진 모든 요소를 숨김
    const middleMenus = document.querySelectorAll('.middleMenu');
    middleMenus.forEach(function (element) {
        element.style.display = 'none';
    });    
});

const closeImg2 = document.getElementById('closeIMG2');
closeImg2.addEventListener('click', function () {
    // middleMenuCCTV 클래스를 가진 모든 요소를 숨김
    const middleMenus2 = document.querySelectorAll('.middleMenuCCTV');
    middleMenus2.forEach(function (element) {
        element.style.display = 'none';
    });
    
});
// 지정날짜 불러오기
const startDateInput = document.getElementById('start');
const endDateInput = document.getElementById('end');

// 시작 날짜 입력란에 이벤트 리스너 추가
startDateInput.addEventListener('input', function (event) {
    const startDate = event.target.value;
    console.log('시작 날짜:', startDate);
});

// 종료 날짜 입력란에 이벤트 리스너 추가
endDateInput.addEventListener('input', function (event) {
    const endDate = event.target.value;
    console.log('종료 날짜:', endDate);
});

//지도함수
let map;
let featureLayer;
// initMap is now async
async function initMap() {
    // Request libraries when needed, not in the script tag.
    const {Map} = await google
        .maps
        .importLibrary("maps");
    // Short namespaces can be used.
    map = new Map(document.getElementById("map"), {
        center: {
            lat: 19.806692123413086,
            lng: 105.7851791381836
        },
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
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                // mapId: '6bb7b904a675912c'
            }
        ]

    });

    const markerView = new google
        .maps
        .marker
        .AdvancedMarkerView({
            map,
            position: {
                lat: 19.806692123413086,
                lng: 105.7851791381836
            }
        });

}

window.initMap = initMap();


document.getElementById('managementButton').addEventListener('click', function() {
    window.location.href = 'management.html';
});